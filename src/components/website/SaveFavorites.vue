<template>
  <v-container class="favorites-container">
    <v-row class="align-center">
      <v-col xl="6" lg="6" md="12" sm="12">
        <h2 class="mb-5 text-h2 accent--text font-weight-bold">
          Save your favourite recipes
        </h2>
        <p class="pt-4 pb-8 text-h4 line-height-15">
          Sign up and create your list of favourites and have access to the full
          selection of recipes
        </p>
        <v-btn outlined rounded x-large to="/registration">
          Get the premium version now
        </v-btn>
      </v-col>
      <v-col xl="6" lg="6" md="12" sm="12">
        <video-player
          :videoUrl="require('../../assets/videos/cookbook_video3.mp4')"
          :posterUrl="require('../../assets/base-imgs/video-start3.png')"
        ></video-player>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
