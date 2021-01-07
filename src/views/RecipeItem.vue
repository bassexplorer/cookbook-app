<template>
  <v-card
    class="pb-6 mx-auto rounded-xl"
    elevation="5"
    max-width="1280"
    color="white"
  >
    <div v-if="!isLoading">
      <recipe-intro
        :portion="loadedRecipe.portionSize"
        :title="loadedRecipe.name"
        :likes="loadedRecipe.likes"
        :imageUrl="loadedRecipe.imageUrl"
        :likedByUser="searchUserRecipes"
        @liked-By-User="addOrRemoveRecipe"
      ></recipe-intro>
      <div class="mx-12">
        <v-row class="justify-space-betwee mt-10">
          <v-col>
            <recipe-portion-setter
              :portion="loadedRecipe.portionSize"
              @on-portion-set="setPortionSize"
            ></recipe-portion-setter>
          </v-col>
        </v-row>
        <v-row class="justify-space-between">
          <v-col cols="6">
            <recipe-ingredients
              :ingredients="loadedRecipe.ingredients"
              :requiredPortion="newPortionSize"
              :portionBase="loadedRecipe.portionSize"
            ></recipe-ingredients>
          </v-col>
          <v-col cols="4">
            <recipe-note
              :class="searchUserRecipes ? '' : 'disableNotes'"
              :disableNotes="!searchUserRecipes"
              :notes="loadUserNotes"
              @note-changed="onNoteSave"
              @editing="onEdit"
            ></recipe-note>
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
      isLoading: true,
      isEditing: false,
      isSavedByUser: this.searchUserRecipes,
      newPortionSize: 0
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
    ...mapState("appInit", ["recipes", "userFavorites"]),
    searchUserRecipes() {
      const favorite = this.userFavorites.findIndex(
        recipe => recipe.id == this.loadedRecipe.id
      );
      if (favorite >= 0) {
        return true;
      } else {
        return false;
      }
    },
    loadUserNotes() {
      const recipe = this.userFavorites.find(
        recipe => recipe.id == this.loadedRecipe.id
      );
      if (!recipe) {
        return "";
      } else {
        return recipe.notes;
      }
    },
    loadedRecipe() {
      return this.recipes.find(recipe => {
        return recipe.slug == this.recipeId;
      });
    }
  },
  methods: {
    ...mapActions("appInit", ["init"]),
    ...mapActions("favoriteRecipes", [
      "saveUpdateRecipe",
      "removeRecipe",
      "userLikeRecipe",
      "userDislikeRecipe"
    ]),
    afterInit() {
      if (!this.loadedRecipe) {
        this.$router.push({ name: "AppHome" });
      }
    },
    onNoteSave(noteToBeSaved) {
      this.loadedRecipe.notes = noteToBeSaved;
      this.saveUpdateRecipe(this.loadedRecipe);
    },
    onEdit(editingState) {
      this.isEditing = editingState;
    },
    addOrRemoveRecipe() {
      if (!this.searchUserRecipes) {
        this.saveUpdateRecipe(this.loadedRecipe);
        this.userLikeRecipe(this.loadedRecipe);
      } else {
        if (this.loadUserNotes !== "") {
          const userWantsToDislike = confirm(
            "Are you sure? You have saved notes on this recipe! If you leave they will be lost!"
          );
          if (userWantsToDislike) {
            this.removeRecipe(this.loadedRecipe);
            this.userDislikeRecipe(this.loadedRecipe);
          } else {
            return;
          }
        } else {
          this.removeRecipe(this.loadedRecipe);
          this.userDislikeRecipe(this.loadedRecipe);
        }
      }
      this.isSavedByUser = !this.isSavedByUser;
    },
    setPortionSize(newPortion) {
      // console.log("newPortion", newPortion);
      this.newPortionSize = newPortion;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.isEditing) {
      const userWantsToLeave = confirm(
        "Are you sure? You have unsaved changes!"
      );
      next(userWantsToLeave);
    } else {
      next();
    }
  }
};
</script>

<style lang="scss"></style>
