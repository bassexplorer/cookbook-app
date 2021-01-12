<template>
  <v-container>
    <v-row class="mx-4">
      <v-col>
        <v-textarea
          outlined
          rounded
          v-model="content"
          dense
          rows="1"
          label="Share your toughts with the others"
          auto-grow
        >
          <template v-slot:append-outer>
            <v-btn
              rounded
              text
              depressed
              class="share-btn"
              @click.stop="onShareReview"
            >
              <v-icon class="ml-2">fa-share</v-icon>
              <span class="ml-2 mr-2">Share</span>
            </v-btn>
          </template>
        </v-textarea>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col> <review-body :isDemo="demo"></review-body> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ReviewBody from "./ReviewBody";

export default {
  props: ["demo", "reviewRecipeId"],
  components: {
    ReviewBody
  },
  data: () => ({
    content: ""
  }),
  computed: {
    ...mapState("auth", ["user"])
  },
  methods: {
    ...mapActions("postReview", ["saveReview"]),
    onShareReview() {
      const reviewObj = {
        author: {
          id: this.user.id,
          name: this.user.name,
          image: this.user.image,
          email: this.user.email
        },
        likedBy: [],
        recipeId: this.reviewRecipeId,
        likes: 0,
        content: this.content
      };
      // console.log(reviewObj);
      this.saveReview(reviewObj);
      this.content = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.share-btn {
  margin-top: -5px;
}
</style>
