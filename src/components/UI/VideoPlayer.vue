<template>
  <div class="video-div">
    <div class="video-overlay" @click="playVideo"></div>
    <video
      :poster="posterUrl"
      playsinline
      muted
      preload
      ref="video"
      class="video-box"
    >
      <source :src="videoUrl" type="video/mp4" />
      Your browser does not support the video tag or the file format of this
      video.
    </video>
    <v-btn
      x-large
      class="stop-play-btn"
      fab
      :class="isPlaying ? 'no-visible' : ''"
      @click="playVideo"
    >
      <v-icon x-large color="white">mdi-play</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ["videoUrl", "posterUrl"],
  data() {
    return {
      isPlaying: false
    };
  },

  methods: {
    playVideo() {
      const video = this.$refs.video;
      console.log(video.playing);
      if (this.isPlaying) {
        video.pause();
        this.isPlaying = false;
      } else {
        this.isPlaying = true;
        video.play();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.video-div {
  position: relative;

  .stop-play-btn {
    position: absolute;
    z-index: 2;
    background-color: #000000ad !important;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s all ease-in-out;
  }
  .no-visible {
    opacity: 0;
  }
  .video-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
}
.video-box {
  min-width: 320px;
  max-width: 750px;
  max-height: 425px;
  width: 100%;
  height: auto;
}
</style>
