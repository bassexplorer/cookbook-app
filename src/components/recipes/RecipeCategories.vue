<template>
  <v-card class="mx-auto" max-width="300" flat color="transparent">
    <!-- <pre>{{ recipeCategories }}</pre> -->
    <v-list dense color="transparent">
      <v-subheader class="text-h6 font-weight-bold">Categories</v-subheader>
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
      } else return "grey lighten-4";
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
// .v-item-group.theme--light.v-list-item-group {
//   background-color: ;
// }
// .v-item-group.theme--dark.v-list-item-group {
// }

//  :to="{
//             name: 'RecipeCategory',
//             params: { categoryId: item.slug }
//           }"
</style>
