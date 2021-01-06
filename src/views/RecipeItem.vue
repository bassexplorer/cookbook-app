<template>
  <v-card class="pb-6 mx-auto rounded-xl" max-width="1280" color="white">
    <div v-if="!isLoading">
      <recipe-intro
        :portion="loadedRecipe.portionSize"
        :title="loadedRecipe.name"
        :likes="loadedRecipe.likes"
        :imageUrl="loadedRecipe.imageUrl"
        :likedByUser="searchUserRecipes"
      ></recipe-intro>

      <div class="mx-12">
        <v-row class="justify-space-betwee mt-10">
          <v-col>
            <recipe-portion-setter
              :portion="loadedRecipe.portionSize"
            ></recipe-portion-setter>
          </v-col>
        </v-row>
        <v-row class="justify-space-between">
          <v-col cols="6">
            <recipe-ingredients
              :ingredients="loadedRecipe.ingredients"
            ></recipe-ingredients>
          </v-col>
          <v-col cols="4">
            <recipe-note :notes="loadedRecipe.notes"></recipe-note>
          </v-col>
        </v-row>
        <v-row>
          <recipe-instructions
            :steps="loadedRecipe.steps"
          ></recipe-instructions>
        </v-row>
      </div>
      <add-review></add-review>
    </div>
    <div v-if="isLoading" class="d-flex pt-6 flex-column align-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      Loading...
    </div>
  </v-card>
</template>

<script>
import RecipeInstructions from "../components/recipes/RecipeInstructions.vue";
import RecipeIngredients from "../components/recipes/RecipeIngredients.vue";
import RecipeNote from "../components/recipes/RecipeNote.vue";
import RecipeIntro from "../components/recipes/RecipeIntro.vue";
import RecipePortionSetter from "../components/recipes/RecipePortionSetter.vue";
import AddReview from "../components/reviews/AddReview.vue";
import { mapActions, mapState } from "vuex";

export default {
  props: ["recipeId"],
  components: {
    RecipeInstructions,
    RecipeIngredients,
    RecipeNote,
    RecipeIntro,
    RecipePortionSetter,
    AddReview
  },
  data() {
    return {
      loadedRecipe: {},
      isLoading: true
    };
  },
  mounted() {
    if (!this.recipes[0]) {
      this.init().then(() => {
        this.afterInit();
        this.isLoading = false;
      });
    } else {
      this.afterInit();
      this.isLoading = false;
    }
  },
  computed: {
    ...mapState("appInit", ["recipes"]),
    searchUserRecipes() {
      return console.log("halóó");
    }
  },
  methods: {
    ...mapActions("appInit", ["init"]),
    afterInit() {
      this.loadedRecipe = this.recipes.find(recipe => {
        return recipe.slug == this.recipeId;
      });
      if (!this.loadedRecipe) {
        this.$router.push({ name: "AppHome" });
      }
    }
  }
};
</script>

<style lang="scss"></style>
