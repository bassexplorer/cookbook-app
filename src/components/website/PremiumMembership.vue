<template>
  <v-container class="premium-container">
    <v-row class="align-center">
      <v-col xl="6" lg="6" md="12" sm="12">
        <h2 class="mb-5 text-h2 accent--text font-weight-bold">
          Why become a Premium member?
        </h2>
        <p class="pt-4 text-h4 line-height-15">
          By choosing the Premium membership, you will be able to unlock all
          recipes and some exclusive features.
        </p>
        <p class="pb-8 text-h4 line-height-15">
          After becoming a member, you will also have access to the printed
          cookbook at a discounted price.
        </p>
        <v-btn outlined rounded x-large to="/registration">
          Explore it now
        </v-btn>
      </v-col>

      <v-col xl="6" lg="6" md="12" sm="12">
        <v-img
          src="../../assets/base-imgs/mockups.png"
          alt="A tablet and a phone preview of the application"
        ></v-img>
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
