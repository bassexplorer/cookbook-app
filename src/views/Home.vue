<template>
  <div>
    <section id="home">
      <intro-section></intro-section>
    </section>
    <section id="recipes" class="py-12 section-background">
      <about-author></about-author>
      <v-container class="mt-6" id="demo_recipes">
        <v-row>
          <v-col
            v-for="(recipe, index) in demoRecipes"
            :key="recipe.id"
            xl="3"
            offset-md="0"
            :offset-xl="index % 2 == 0 ? 3 : 0"
          >
            <card-template
              class="mx-auto"
              :imageUrl="recipe.imageUrl"
              :title="recipe.name"
              :likes="recipe.likes"
              :portion="recipe.portionSize"
              :slug="recipe.slug"
            ></card-template>
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="premium" class="py-12">
      <section class="py-12 ">
        <premium-membership></premium-membership>
      </section>
      <section class="py-12 section-background">
        <search-section></search-section>
      </section>
      <section class="py-12">
        <save-favorites></save-favorites>
      </section>
    </section>
    <section id="book" class="py-12 section-background">
      <book-purchase></book-purchase>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
import IntroSection from "../components/website/IntroSection.vue";
import AboutAuthor from "../components/website/AboutAuthor.vue";
import PremiumMembership from "../components/website/PremiumMembership.vue";
import SearchSection from "../components/website/SearchSection.vue";
import SaveFavorites from "../components/website/SaveFavorites.vue";
import BookPurchase from "../components/website/BookPurchase.vue";

export default {
  components: {
    IntroSection,
    AboutAuthor,
    PremiumMembership,
    SearchSection,
    SaveFavorites,
    BookPurchase
  },
  computed: mapState("appInit", ["demoRecipes"])
};
</script>
<style lang="scss" scoped>
.section-background {
  background-color: #f7f7f7;
}
section {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
