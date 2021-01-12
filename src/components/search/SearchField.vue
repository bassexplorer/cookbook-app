<template>
  <div>
    <v-text-field
      v-model="searchTerm"
      filled
      label="Search recipe or ingredients"
      clearable
      ref="searchField"
      prepend-icon="fa-search"
      @input="onSearch"
      rounded
    ></v-text-field>
    <v-row class="mt-n8">
      <v-col class="justify-center d-flex">
        <v-checkbox
          v-model="justTitle"
          class="mx-8 mt-0"
          color="secondary"
          label="Search by recipe"
        ></v-checkbox>
        <v-checkbox
          color="secondary"
          v-model="justIngredients"
          class="mt-0"
          label="Search by ingredients"
        ></v-checkbox>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchTerm: "",
      justTitle: true,
      justIngredients: false
    };
  },
  methods: {
    onSearch() {
      this.$emit(
        "search",
        this.searchTerm,
        this.justTitle,
        this.justIngredients
      );

      // This need to be solved later
      this.$router
        .replace({
          query: { search_term: this.searchTerm }
        })
        .catch(() => {});
    }
  },
  watch: {
    $route(to) {
      // console.log("to", to);
      // console.log("from", from);
      if (!to.query.search_term && this.searchTerm != "") {
        this.$refs.searchField.reset();
      }
    }
  }
};
</script>
