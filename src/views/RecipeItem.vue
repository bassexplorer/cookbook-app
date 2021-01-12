<template>
  <v-container>
    <v-card class="pb-6 mx-auto rounded-xl" elevation="6" max-width="1280">
      <div v-if="!isLoading">
        <recipe-intro
          :portion="loadedRecipe.portionSize"
          :title="loadedRecipe.name"
          :likes="loadedRecipe.likes"
          :imageUrl="loadedRecipe.imageUrl"
          :likedByUser="searchUserRecipes"
          @liked-By-User="addOrRemoveRecipe"
          :demo="isDemoRecipe"
        ></recipe-intro>
        <div class="mx-12">
          <v-row class="mt-10 justify-space-betwee">
            <v-col>
              <recipe-portion-setter
                :portion="loadedRecipe.portionSize"
                @on-portion-set="setPortionSize"
              ></recipe-portion-setter>
            </v-col>
          </v-row>
          <v-row class="justify-space-between">
            <v-col xl="6" lg="6" md="6" sm="6">
              <recipe-ingredients
                :ingredients="loadedRecipe.ingredients"
                :requiredPortion="newPortionSize"
                :portionBase="loadedRecipe.portionSize"
              ></recipe-ingredients>
            </v-col>
            <v-col xl="4" lg="4" md="4" sm="4">
              <recipe-note
                :demo="isDemoRecipe"
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
        <add-review
          :demo="isDemoRecipe"
          :reviewRecipeId="loadedRecipe.id"
        ></add-review>
      </div>
      <!--  -->
      <div v-if="isLoading" class="pt-6 d-flex flex-column align-center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
        Loading...
      </div>
      <!--  -->
    </v-card>
    <!-- Dialog box -->
    <dialog-box v-model="openDialog">
      <template #title>
        <h3>Are you sure?</h3>
      </template>
      <template #context>
        <p class="text-body-1">
          You have saved notes with this recipe! If you unlike this recipe they
          will be lost!
        </p>
      </template>
      <template #action>
        <v-btn
          class="px-5"
          rounded
          outlined
          @click.stop="userWantsToDislike(true)"
        >
          Unsave Recipe
        </v-btn>
        <v-btn
          class="px-5"
          rounded
          outlined
          @click.stop="userWantsToDislike(false)"
        >
          I keep it
        </v-btn>
      </template>
    </dialog-box>
  </v-container>
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
      newPortionSize: 0,
      openDialog: false
    };
  },
  mounted() {
    if (!this.recipes[0]) {
      this.init()
        .then(() => {
          this.afterInit();
        })
        .then(() => {
          this.initReviews(this.loadedRecipe.id);
          this.isLoading = false;
        });
    } else {
      this.afterInit();
      this.initReviews(this.loadedRecipe.id);
      this.isLoading = false;
    }
  },
  computed: {
    ...mapState("appInit", ["recipes", "userFavorites"]),
    ...mapState("postReview", ["userReviews"]),
    isDemoRecipe() {
      const demo = this.$route.query.teaser;
      if (!demo) {
        return false;
      } else {
        return true;
      }
    },
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
    ...mapActions("postReview", ["initReviews", "tearDownReviews"]),
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
    userWantsToDislike(dislike) {
      if (dislike) {
        this.removeRecipe(this.loadedRecipe);
        this.userDislikeRecipe(this.loadedRecipe);
        this.openDialog = false;
      } else {
        this.openDialog = false;
        return;
      }
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
          this.openDialog = true;
        } else {
          this.removeRecipe(this.loadedRecipe);
          this.userDislikeRecipe(this.loadedRecipe);
        }
      }
      this.isSavedByUser = !this.isSavedByUser;
    },
    setPortionSize(newPortion) {
      this.newPortionSize = newPortion;
    }
  },
  beforeDestroy() {
    this.tearDownReviews();
  }
};
</script>

<style lang="scss"></style>
