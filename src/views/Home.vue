<template>
  <v-container>
    <v-card height="100vh" width="100%" class="text-center" id="home">
      <h1 class="pt-16">Section 1</h1>
      <intro-component></intro-component>
    </v-card>
    <v-card height="100vh" width="100%" class="text-center" id="recipes">
      <h1 class="pt-16">Section 2</h1>
      <v-container fluid class="mt-6">
        <h3 class="text-h4 font-weight-bold">Our Suggestions</h3>
        <v-row>
          <v-col v-for="recipe in demoRecipes" :key="recipe.id" cols="6">
            <card-template
              :imageUrl="recipe.imageUrl"
              :title="recipe.name"
              :likes="recipe.likes"
              :portion="recipe.portionSize"
              :slug="recipe.slug"
            ></card-template>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card height="100vh" width="100%" class="text-center" id="premium">
      <h1 class="pt-16">Section 3</h1>
    </v-card>
    <v-card height="100vh" width="100%" class="text-center" id="book">
      <h1 class="pt-16">Section 4</h1>
    </v-card>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
import IntroComponent from "../components/website/IntroSection";
export default {
  components: { IntroComponent },
  computed: {
    ...mapState("appInit", ["demoRecipes"])
  }
};
</script>
<style lang=""></style>
