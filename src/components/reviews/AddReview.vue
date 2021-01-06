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
              <v-icon>fa-share</v-icon>
              <span class="ml-2 mr-4">Share</span>
            </v-btn>
          </template>
        </v-textarea>
      </v-col>
    </v-row>

    <v-row class="mx-4">
      <v-col> <review-body></review-body> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ReviewBody from "./ReviewBody";
export default {
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
