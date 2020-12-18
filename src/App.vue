<template>
  <v-app>
    <TopNavigationComp />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TopNavigationComp from "./components/TopNavigationComp";

export default {
  name: "App",

  components: { TopNavigationComp },

  data: () => ({
    //
  })
};
</script>
