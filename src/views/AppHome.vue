<template>
  <v-container>
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
        <v-col xl="9" lg="9" md="9" sm="12" class="mx-auto">
          <recipe-categories-mobile
            v-if="$vuetify.breakpoint.mobile"
            class="mb-6"
          ></recipe-categories-mobile>
          <router-view v-if="!isSearching"></router-view>

          <search-results
            @open-popup="noResultFound"
            v-if="isSearching"
            :searchTerm="searchTerm"
            :searchByTitle="byTitle"
            :searchByIngredient="byIngredient"
          ></search-results>
        </v-col>
        <v-col xl="3" lg="3" md="3" sm="12" v-if="!$vuetify.breakpoint.mobile">
          <recipe-categories></recipe-categories>
        </v-col>
      </v-row>
    </v-card>
    <dialog-box v-model="popup">
      <template #title>
        <h3>Ohh... Nooo... &#128532;</h3>
      </template>
      <template #context>
        <p class="text-body-1">
          We didn't found any recipe with the
          <span v-if="byTitle && !byIngredient"> name of</span>
          <span v-if="!byTitle && byIngredient"> ingredient of</span>
          <span v-if="byTitle && byIngredient"> name or ingredients like</span>
          :
          <span class="font-weight-bold"> "{{ searchTerm }}" </span>
        </p>
      </template>

      <template #action>
        <div>
          <v-btn class="px-5 mb-2" rounded outlined @click.stop="resetSearch">
            Okay
          </v-btn>
        </div>
      </template>
    </dialog-box>
  </v-container>
</template>

<script>
import SearchField from "../components/search/SearchField.vue";
import SearchResults from "../components/search/SearchResults.vue";
import RecipeCategories from "../components/recipes/RecipeCategories.vue";
import RecipeCategoriesMobile from "../components/recipes/RecipeCategoriesMobile.vue";
import { mapActions, mapState } from "vuex";
// import MainArea from "../components/app-home/MainArea.vue";
export default {
  components: {
    SearchField,
    RecipeCategories,
    RecipeCategoriesMobile,
    SearchResults
  },
  data() {
    return {
      isSearching: false,
      searchTerm: "",
      byTitle: true,
      byIngredient: false,
      popup: false
    };
  },
  methods: {
    onSearch(term, title, ingredient) {
      if (term) {
        this.isSearching = true;
      } else {
        this.isSearching = false;
      }
      this.byTitle = title;
      this.byIngredient = ingredient;
      this.searchTerm = term;
    },
    ...mapActions("appInit", ["init"]),
    noResultFound(value) {
      this.popup = value;
    },
    resetSearch() {
      this.searchTerm = "";
      this.popup = false;
    }
  },
  mounted() {
    if (!this.recipes[0]) {
      this.init().then(() => {
        this.isLoading = false;
      });
    } else {
      this.isLoading = false;
    }
  },
  computed: {
    ...mapState("appInit", ["recipes"]),
    ...mapState("appInit", ["userFavorites"])
  }
};
</script>

<style lang="scss" scoped>
.theme--dark.v-card {
  background-color: transparent !important;
  border-color: transparent !important;
}
</style>
