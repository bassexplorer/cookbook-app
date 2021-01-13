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
        <video-player
          :videoUrl="require('../../assets/videos/cookbook_video1.mp4')"
          :posterUrl="require('../../assets/base-imgs/video-start.png')"
        ></video-player>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // data() {
  //   return {
  //     isPlaying: false
  //   };
  // },
  // methods: {
  //   playVideo() {
  //     const video = this.$refs.video;
  //     console.log(video.playing);
  //     if (this.isPlaying) {
  //       video.pause();
  //       this.isPlaying = false;
  //     } else {
  //       this.isPlaying = true;
  //       video.play();
  //     }
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.home-container {
  min-height: calc(100vh - (128px + 30px));
  display: flex;
  justify-content: center;
}
</style>
