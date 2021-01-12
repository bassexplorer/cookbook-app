<template>
  <v-container fluid class="reviews-container">
    <div
      class="justify-center demo-recipe d-flex flex-column align-center"
      v-if="isDemo"
    >
      <span class="mb-5 text-h6">
        You need to Login or Purchase the premium version to be able to comment
      </span>
      <div>
        <v-btn rounded outlined class="mr-2" :to="register"> Sign Up </v-btn>
        <v-btn rounded outlined class="mr-2" :to="login"> Log in </v-btn>
      </div>
    </div>

    <v-card
      outlined
      elevation=""
      max-width="1060"
      min-height="100"
      v-for="review in sortedReviews"
      :key="review.reviewId"
      class="mb-4 mr-auto rounded-xl"
    >
      <v-list three-line color="transparent">
        <v-list-item>
          <v-list-item-avatar size="60" class="avatar-img elevation-2">
            <v-img
              v-if="review.author.image"
              :src="review.author.image"
              :alt="review.author.name"
            ></v-img>
            <v-icon v-if="!review.author.image" alt="Avatar">
              mdi-account-circle
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content class="pb-0">
            <v-list-item-title class="text-h6 d-inline-flex">
              <span>{{ review.author.name }}</span>
              <v-spacer></v-spacer>
              <v-btn icon v-if="user.id == review.author.id">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-title>
            <v-list-item-subtitle
              class="text-body-1"
              v-html="review.content"
            ></v-list-item-subtitle>
            <v-list-item-action
              class="flex-row justify-start pa-0 ma-0 align-center"
            >
              <div>
                <v-btn
                  text
                  @click="onLikeReview(review.reviewId)"
                  :class="review.likedBy.includes(user.id) ? 'red--text' : ''"
                >
                  <v-icon medium class="mr-2">{{
                    review.likedBy.includes(user.id)
                      ? "mdi-heart"
                      : "mdi-heart-outline"
                  }}</v-icon>
                  {{ review.likedBy.includes(user.id) ? "Liked" : "Like" }}
                </v-btn>
              </div>
              <v-spacer></v-spacer>
              <div>
                {{ review.likes }}
                <v-icon color="red">mdi-heart</v-icon>
              </div>
            </v-list-item-action>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["isDemo"],
  data: () => ({
    register: { name: "Registration" },
    login: { name: "LogIn" }
  }),
  methods: {
    ...mapActions("postReview", ["initReviews", "updateReview"]),
    onLikeReview(reviewId) {
      const currentReview = this.sortedReviews.find(review => {
        return review.reviewId == reviewId;
      });
      this.updateReview(currentReview);
    }
  },
  computed: {
    ...mapState("postReview", ["userReviews"]),
    ...mapState("auth", ["user"]),
    sortedReviews() {
      const sortedReviews = [...this.userReviews].sort((a, b) => {
        return b.likes - a.likes;
      });

      return sortedReviews;
    }
    // userLikedReview() {
    //   if (this.currentReview.likedBy.includes(this.user)) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
.theme--dark.v-sheet--outlined {
  border: thin solid #ffffffc5;
}

.theme--light.v-sheet--outlined {
  border: thin solid #00000085;
}

.reviews-container {
  position: relative;
}
.demo-recipe {
  position: absolute;
  width: 100%;
  height: 100%;
  margin-left: -10px;
  background: linear-gradient(transparent, white 50%);
  z-index: 10;
}
</style>
