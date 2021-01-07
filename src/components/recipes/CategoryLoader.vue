<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="recipe in recipesInCategory" :key="recipe.id" cols="6">
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
  props: ["categoryId"],
  computed: {
    ...mapState("appInit", ["recipes"]),
    recipesInCategory() {
      return this.recipes.filter(recipe => {
        return recipe.category.slug == this.categoryId;
      });
    }
  }
};
</script>
