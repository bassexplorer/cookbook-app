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
import TheFooter from "./components/layout/TheFooter.vue";
import TheNavigation from "./components/layout/TheNavigation";

export default {
  name: "App",

  components: {
    TheNavigation,
    TheFooter
  },

  data: () => ({
    //
  })
};
</script>
