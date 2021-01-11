<template>
  <v-card class="mx-auto" max-width="300" flat color="transparent">
    <v-list dense color="transparent">
      <v-subheader class="text-h6 font-weight-bold">
        Categories
        <v-spacer></v-spacer>
        <v-btn
          text
          outlined
          :to="{
            name: 'AllRecipes'
          }"
        >
          Show all
        </v-btn>
      </v-subheader>

      <v-list-item-group
        v-for="(item, index) in sortedCategories"
        :key="item.id"
      >
        <v-list-item
          link
          :to="{
            name: 'CategoryLoader',
            params: { categoryId: item.slug }
          }"
          :class="isEven(index)"
        >
          <v-list-item-content>
            <v-list-item-title
              class="text-body-1"
              v-text="item.name"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    isEven(number) {
      if (number % 2 == 0) {
        return "";
      } else return "accent lighten-3 flip-text-color";
    }
  },
  computed: {
    ...mapState("appInit", ["recipeCategories"]),
    sortedCategories() {
      const sortedCategory = [...this.recipeCategories].sort((a, b) => {
        const ca = a.name.toLowerCase();
        const cb = b.name.toLowerCase();

        if (ca < cb) {
          return -1;
        }
        if (ca > cb) {
          return 1;
        }
        return 0;
      });

      return sortedCategory;
    }
  }
};
</script>

<style lang="scss" scoped>
.flip-text-color .v-list-item__title {
  color: white;
}
</style>
