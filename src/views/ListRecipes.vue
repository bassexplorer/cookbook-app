<template lang="html">
  <pre>
    {{ recipes }}
  </pre>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ListRecipes",
  mounted() {
    this.init();
  },
  computed: mapState("appInit", ["recipes"]),
  methods: mapActions("appInit", ["init"])
};
</script>
