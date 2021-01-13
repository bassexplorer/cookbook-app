<template>
  <v-container class="search-container">
    <v-row class="align-center">
      <v-col xl="6" lg="6" md="12" sm="12">
        <video-player
          class="video-player"
          :videoUrl="require('../../assets/videos/cookbook_video2.mp4')"
          :posterUrl="require('../../assets/base-imgs/video-start2.png')"
        ></video-player>
      </v-col>
      <v-col xl="6" lg="6" md="12">
        <h2 class="mb-5 text-h2 accent--text font-weight-bold">
          Search recipes with ingredients
        </h2>
        <p class="pt-4 pb-8 text-h4 line-height-15">
          Do you have some items already in store? We are also fans of reducing
          food waste!
        </p>
        <v-btn outlined rounded x-large to="/registration">
          Get the premium version now
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.video-player {
  mix-blend-mode: darken;
}
</style>
