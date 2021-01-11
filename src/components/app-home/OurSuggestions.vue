<template>
  <v-container fluid class="mt-6">
    <h3 class="text-h4 font-weight-bold">Our Suggestions</h3>
    <v-row>
      <v-col v-for="recipe in demoRecipes" :key="recipe.id" xl="6" sm="6">
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
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState("appInit", ["demoRecipes"])
};
</script>
