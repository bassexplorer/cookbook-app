<template>
  <v-container>
    <v-row class="align-center">
      <v-col xl="6" lg="6" md="12" sm="12">
        <video class="video-box" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </v-col>
      <v-col xl="6" lg="6" md="12" sm="12">
        <h2 class="text-h2 accent--text font-weight-bold mb-5">
          Hold the book in your hands, keep it on the shelf or gift it.
        </h2>
        <p class="text-h4">
          Our chefs have been working hard at making a deliscious list of dishes
          from Vrå Høsjkole’s kitchen. This book holds them all.
        </p>
        <v-btn outlined x-large to="/registration">
          Get the book now <v-icon class="pl-5">mdi-arrow-right</v-icon>
        </v-btn>
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
