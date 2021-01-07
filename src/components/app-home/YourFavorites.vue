<template>
  <v-container fluid class="mt-6">
    <h3 class="text-h4 font-weight-bold">Your Favourites</h3>
    <v-row>
      <v-col v-for="recipe in userFavorites" :key="recipe.id" cols="6">
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
  computed: mapState("appInit", ["userFavorites"])
};
</script>
