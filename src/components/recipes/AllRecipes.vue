<template>
  <v-container fluid>
    <h3 class="text-h4 font-weight-bold">All Recipies</h3>
    <v-row>
      <v-col v-for="recipe in recipes" :key="recipe.id" xl="6" sm="6">
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
  computed: {
    ...mapState("appInit", ["recipes", "recipeCategories"]),
    existingRecipes() {
      return this.recipes.filter(recipe => {
        return this.recipeCategories.map(category => {
          return recipe.category.slug == category.slug;
        });
      });
    }
  }
};
</script>
