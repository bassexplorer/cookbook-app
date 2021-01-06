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
import { mapActions, mapState } from "vuex";
export default {
  props: ["categoryId"],
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

  methods: {
    ...mapActions("appInit", ["init"]),
    afterInit() {
      const categoryWannabe = this.recipesInCategory;
      if (!categoryWannabe) {
        this.$router.push({ name: "NotFound" });
      }
    }
  },
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
