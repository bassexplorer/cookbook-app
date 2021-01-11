<template>
  <v-container>
    <v-row class="align-center">
      <v-col xl="6" lg="6" md="12" sm="12">
        <div class="mx-auto relative-point">
          <v-img
            class="book-image elevation-10"
            width="320"
            src="../../assets/base-imgs/book-image.png"
            alt="The image of the book itself"
          >
          </v-img>
          <v-sheet
            width="250"
            height="250"
            outlined
            elevation="6"
            class="text-center d-flex flex-column rounded-circle price-tag pa-8"
          >
            <h4 class="text-h4 font-weight-bold red--text text--darken-3">
              400dkk
            </h4>
            <p class="text-h5">+ Premium version for free</p>
          </v-sheet>
        </div>
      </v-col>
      <v-col xl="6" lg="6" md="12" sm="12">
        <h2 class="mb-5 text-h2 accent--text font-weight-bold line-height-15">
          Hold the book in your hands, keep it on the shelf or gift it
        </h2>
        <p class="pt-4 pb-8 text-h4 line-height-15">
          Our chefs have been working hard at making a deliscious list of dishes
          from Vrå Høsjkole’s kitchen. This book holds them all.
        </p>
        <v-btn rounded outlined x-large @click="popup = true">
          Get the book now <v-icon class="pl-5">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <dialog-box v-model="popup">
      <template #title>
        <h3>Ohh... Nooo... &#128532;</h3>
      </template>
      <template #context>
        <p class="text-body-1">This page is out of order right now!</p>
      </template>
    </dialog-box>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      popup: false
    };
  }
};
</script>

<style lang="scss" scoped>
.relative-point {
  position: relative;
  width: fit-content;
  justify-content: center;
  margin-bottom: 125px;
}
.price-tag {
  position: absolute;
  background-color: #fcfcfcdc;
  bottom: -125px;
  right: -125px;
  z-index: 100;
  justify-content: center;
  border: 5px solid;
}
</style>
