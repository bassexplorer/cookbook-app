<template>
  <v-app>
    <the-navigation></the-navigation>

    <v-main class="overflow-y-auto">
      <!-- <v-container> -->
      <loading-overlay v-if="isLoggedIn && isLoading"></loading-overlay>
      <router-view />
      <!-- </v-container> -->
    </v-main>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TheFooter from "./components/layout/TheFooter.vue";
import TheNavigation from "./components/layout/TheNavigation";
import LoadingOverlay from "./components/UI/LoadingOverlay";

export default {
  name: "App",

  components: {
    TheNavigation,
    TheFooter,
    LoadingOverlay
  },
  mounted() {
    this.homeInit();
    if (this.isLoggedIn) {
      this.init();
    }
  },
  computed: {
    ...mapState("auth", ["isLoggedIn"]),
    ...mapState("appInit", ["isLoading"])
  },
  methods: mapActions("appInit", ["init", "homeInit"])
};
</script>

<style lang="scss">
.theme--dark.v-application {
  background: darken(#383358, 10%) !important;
  color: #ffe5e5 !important;
}

.theme--dark.v-card {
  background: #383358 !important;
  color: #ffe5e5 !important;
}
.line-height-15 {
  line-height: 1.5 !important;
}
</style>
