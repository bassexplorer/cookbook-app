<template>
  <v-container fluid class="mt-6">
    <div v-for="category in recipeCategories" :key="category.slug">
      <h3 class="text-h4 font-weight-bold">{{ category.name }}</h3>
      <v-row>
        <v-col v-for="recipe in recipes" :key="recipe.id" cols="6">
          <card-template
            v-if="recipe.category.slug == category.slug"
            :imageUrl="recipe.imageUrl"
            :title="recipe.name"
            :likes="recipe.likes"
            :portion="recipe.portionSize"
            :slug="recipe.slug"
          ></card-template>
        </v-col>
      </v-row>
    </div>
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
