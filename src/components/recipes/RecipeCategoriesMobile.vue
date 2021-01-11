<template>
  <v-sheet class="mx-auto" color="transparent" max-width="800">
    <v-slide-group multiple show-arrows>
      <v-slide-item>
        <v-btn
          depressed
          rounded
          link
          outlined
          class="mx-2"
          active-class="accent white--text"
          :to="{
            name: 'AllRecipes'
          }"
        >
          Show all
        </v-btn>
      </v-slide-item>
      <v-slide-item
        v-for="item in sortedCategories"
        :key="item.id"
        v-slot="{ active }"
      >
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="accent white--text"
          depressed
          rounded
          link
          :to="{
            name: 'CategoryLoader',
            params: { categoryId: item.slug }
          }"
        >
          {{ item.name }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import { mapState } from "vuex";
export default {
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
