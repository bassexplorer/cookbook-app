<template>
  <v-card
    class="pb-6 mx-auto rounded-xl"
    max-width="1280"
    flat
    color="transparent"
  >
    <v-row>
      <v-col>
        <search-field></search-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="7" class="mx-auto">
        <v-card flat color="error" rounded="xl">
          <v-card-text
            class="white--text text--lighten-5 text-center text-h5 font-weight-bold"
          >
            Your discount code for the book: <br />
            {{ user.discount_code }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <recipe-categories></recipe-categories>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SearchField from "../components/app-home/SearchField";
import RecipeCategories from "../components/recipes/RecipeCategories.vue";
export default {
  components: {
    SearchField,
    RecipeCategories
  },
  computed: { ...mapState("auth", ["user"]) },

  methods: {
    ...mapActions("appInit", ["init"])
  },

  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped></style>
