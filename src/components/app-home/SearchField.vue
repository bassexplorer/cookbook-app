<template>
  <div>
    <v-text-field
      v-model="searchTerm"
      filled
      label="Search recipe or ingredients"
      clearable
      prepend-icon="fa-search"
      @keyup="onSearch"
      rounded
    ></v-text-field>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    onSearch() {
      if (this.searchTerm === "") return;
      alert("click:prepend");
    }
  }
};
</script>
<style lang="scss" scoped></style>
