<template>
  <v-card class="pb-6 mx-auto rounded-xl" max-width="1280" color="white">
    <recipe-intro
      :portion="0"
      title="The title is missing"
      :likes="0"
    ></recipe-intro>
    <recipe-portion-setter :portion="0"></recipe-portion-setter>
    <recipe-ingredients></recipe-ingredients>
    <recipe-note></recipe-note>
    <recipe-instructions></recipe-instructions>
    <add-review></add-review>
  </v-card>
</template>

<script>
import RecipeInstructions from "../components/recipes/RecipeInstructions.vue";
import RecipeIngredients from "../components/recipes/RecipeIngredients.vue";
import RecipeNote from "../components/recipes/RecipeNote.vue";
import RecipeIntro from "../components/recipes/RecipeIntro.vue";
import RecipePortionSetter from "../components/recipes/RecipePortionSetter.vue";
import AddReview from "../components/reviews/AddReview.vue";

export default {
  components: {
    RecipeInstructions,
    RecipeIngredients,
    RecipeNote,
    RecipeIntro,
    RecipePortionSetter,
    AddReview
  }
};
</script>

<style lang="scss"></style>
