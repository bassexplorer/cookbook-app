<template>
  <v-container fluid>
    <h3 class="text-h4 font-weight-bold">All Recipies</h3>
    <v-row>
      <v-col v-for="recipe in sortedRecipes" :key="recipe.id" xl="6" sm="6">
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
    sortedRecipes() {
      const sortedRecipe = [...this.recipes].sort((a, b) => {
        const ca = a.name.toLowerCase();
        const cb = b.name.toLowerCase();

        if (ca < cb) {
          return -1;
        }
        if (ca > cb) {
          return 1;
        }
        return 0;
      });

      return sortedRecipe;
    }
  }
};
</script>
