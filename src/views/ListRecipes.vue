<template>
  <v-container fluid>
    <pre>{{ recipes }}</pre>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["categoryId"],
  name: "ListRecipes",
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
  computed: mapState("appInit", ["recipes"]),
  methods: {
    ...mapActions("appInit", ["init"]),
    afterInit() {
      this.loadedRecipe = this.recipes.find(recipe => {
        return recipe.category.slug == this.categoryId;
      });
      if (!this.loadedRecipe) {
        this.$router.push({ name: "NotFound" });
      }
    }
  }
};
</script>
