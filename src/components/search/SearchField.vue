<template>
  <div>
    <v-text-field
      v-model="searchTerm"
      filled
      label="Search recipe or ingredients"
      clearable
      prepend-icon="fa-search"
      @input="onSearch"
      rounded
    ></v-text-field>
    <v-row class="mt-n8">
      <v-col class="d-flex justify-center">
        <v-checkbox
          v-model="justTitle"
          class="mx-8 mt-0"
          label="Search by recipe"
        ></v-checkbox>
        <v-checkbox
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
    }
  }
};
</script>
