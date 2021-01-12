<template>
  <v-container class="my-16">
    <v-row class="align-center">
      <v-col xl="6" lg="6" md="12" sm="12">
        <h2 class="mb-10 text-h2 accent--text font-weight-bold">
          Our chef recommends for you to try
        </h2>
        <p class="pt-4 pl-0 text-h4 line-height-15">
          These recipes were selected by Lars for you to enjoy.
        </p>

        <p class="pb-8 text-h4 line-height-15">
          If you would like to access all recipes and some added features, like
          saving your favourites, become a premium member!
        </p>

        <v-btn outlined rounded x-large link exact to="#demo_recipes">
          Explore Recipes
        </v-btn>
      </v-col>
      <v-col xl="6" lg="6" md="12" sm="12">
        <v-img
          max-width="60%"
          class="mx-auto"
          src="../../assets/base-imgs/the-book-author.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
