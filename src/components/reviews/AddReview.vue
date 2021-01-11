<template>
  <v-container>
    <v-row class="mx-4">
      <v-col>
        <v-textarea
          outlined
          rounded
          dense
          rows="1"
          label="Share your toughts with the others"
          auto-grow
        >
          <template v-slot:append-outer>
            <v-btn rounded text depressed class="share-btn">
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
import ReviewBody from "./ReviewBody";
export default {
  props: ["demo"],

  components: {
    ReviewBody
  }
};
</script>

<style lang="scss" scoped>
.share-btn {
  margin-top: -5px;
}
</style>
