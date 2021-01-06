<template>
  <v-app>
    <the-navigation></the-navigation>

    <v-main class="overflow-y-auto">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TheFooter from "./components/layout/TheFooter.vue";
import TheNavigation from "./components/layout/TheNavigation";

export default {
  name: "App",

  components: {
    TheNavigation,
    TheFooter
  },
  mounted() {
    if (this.isLoggedIn) {
      this.init();
      console.log(this.isLoggedIn);
    }
  },
  computed: { ...mapState("auth", ["isLoggedIn"]) },
  methods: mapActions("appInit", ["init"])
};
</script>
