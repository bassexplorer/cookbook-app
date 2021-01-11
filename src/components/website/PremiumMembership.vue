<template>
  <v-container class="premium-container">
    <v-row class="align-center">
      <v-col xl="6" lg="6" md="12" sm="12">
        <h2 class="text-h3 accent--text font-weight-bold mb-5">
          Why become a Premium member?
        </h2>
        <p class="text-h4">
          By choosing the Premium membership, you will be able to unlock all
          recipes and some exclusive features.
        </p>
        <p class="text-h4">
          After becoming a member, you will also have access to the printed
          cookbook at a discounted price.
        </p>
        <v-btn outlined x-large to="/registration">Explore it now</v-btn>
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
.video-box {
  min-width: 320px;
  max-width: 750px;
  max-height: 368px;
  width: 100%;
  height: auto;
}
</style>
