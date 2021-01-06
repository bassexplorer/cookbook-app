<template>
  <v-card
    class="pb-6 mx-auto rounded-xl"
    max-width="1280"
    flat
    color="transparent"
  >
    <v-row>
      <v-col>
        <search-field @search="onSearch"></search-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9" class="mx-auto">
        <!-- <main-area v-show="!isSearching"></main-area> -->

        <router-view v-if="!isSearching"></router-view>

        <search-results
          v-if="isSearching"
          :searchTerm="searchTerm"
          :searchByTitle="byTitle"
          :searchByIngredient="byIngredient"
        ></search-results>
      </v-col>
      <v-col cols="3">
        <recipe-categories></recipe-categories>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import SearchField from "../components/search/SearchField.vue";
import SearchResults from "../components/search/SearchResults.vue";
import RecipeCategories from "../components/recipes/RecipeCategories.vue";
// import MainArea from "../components/app-home/MainArea.vue";
export default {
  components: {
    SearchField,
    RecipeCategories,
    // MainArea,
    SearchResults
  },
  data() {
    return {
      isSearching: false,
      searchTerm: "",
      byTitle: true,
      byIngredient: false,
      showRouterView: false
    };
  },
  methods: {
    onSearch(term, title, ingredient) {
      console.log(term, title, ingredient);
      if (term) {
        this.isSearching = true;
      } else {
        this.isSearching = false;
      }
      this.byTitle = title;
      this.byIngredient = ingredient;
      this.searchTerm = term;
    }
  }
};
</script>

<style lang="scss" scoped></style>
