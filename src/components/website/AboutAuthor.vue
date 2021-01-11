<template>
  <v-container>
    <v-row class="align-center">
      <v-col xl="6" lg="6" md="12" sm="12">
        <h2 class="text-h2 accent--text font-weight-bold mb-10">
          Our chef recommends for you to try.
        </h2>
        <v-spacer></v-spacer>
        <p class="text-h4 pl-0">
          These recipes were selected by Lars for you to enjoy.
        </p>
        <v-spacer></v-spacer>

        <p class="text-h4 pa-5 pl-0">
          If you would like to access all recipes and some added features, like
          saving your favourites, become a premium member!
        </p>
        <v-spacer></v-spacer>

        <v-btn outlined x-large to="/registration">Explore Recipes</v-btn>
      </v-col>
      <v-col xl="6" lg="6" md="12" sm="12">
        <v-img
          max-width="60%"
          class="mx-auto"
          src="../../assets/base-imgs/lars-chef.png"
        ></v-img>
        <!-- the image from pexels.com
        https://www.pexels.com/photo/chef-holding-a-salad-on-plate-2494654/?fbclid=IwAR1EJYANe2lbqwAiuO07zCsBuitsM3azeYwZ98IXIV2t6x2-5DFMXAn_yL0 -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
