<template>
  <v-container class="home-container">
    <v-row class="align-center">
      <v-col xl="6" lg="6" md="12" sm="12">
        <h1
          class="mb-5 text-h2 text-sm-h2 text-md-h1 accent--text font-weight-bold"
        >
          Do you remember that tasty meal at Vrå Højskole?
        </h1>
        <p class="text-h4">Relive, Share or Gift the Experience</p>
        <v-btn outlined rounded x-large to="/registration">Sign up</v-btn>
      </v-col>
      <v-col xl="6" lg="6" md="12" sm="12">
        <video class="video-box" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home-container {
  min-height: calc(100vh - (128px + 30px));
  display: flex;
  justify-content: center;
}
.video-box {
  min-width: 320px;
  max-width: 750px;
  max-height: 368px;
  width: 100%;
  height: auto;
}
</style>
