<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col v-for="recipe in foundRecipes" :key="recipe.id" xl="6" sm="6">
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
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["searchTerm", "searchByTitle", "searchByIngredient"],

  computed: {
    ...mapState("appInit", ["recipes"]),
    foundRecipes() {
      const regexp = new RegExp(this.searchTerm, "gi");

      if (this.searchByTitle && this.searchByIngredient) {
        const result = this.recipes.filter(recipe => {
          return JSON.stringify(recipe).match(regexp);
        });
        if (!result[0]) {
          this.$emit("open-popup", true);
        }
        return result;
      } else if (this.searchByIngredient) {
        const result = this.recipes.filter(recipe => {
          return JSON.stringify(recipe.ingredients).match(regexp);
        });
        if (!result[0]) {
          this.$emit("open-popup", true);
        }
        return result;
      } else {
        const result = this.recipes.filter(recipe => {
          return recipe.name.match(regexp);
        });
        if (!result[0]) {
          this.$emit("open-popup", true);
        }
        return result;
      }
    }
  }
};
</script>
