<template>
  <v-container class="text-center not-found">
    <h2>404 Page Not Found</h2>
    <span>
      Try to go back to the <br />
      <v-btn :to="home"><v-icon>mdi-arrow-left</v-icon> Home Page </v-btn>
    </span>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      home: {
        name: "AppHome"
      }
    };
  }
};
</script>

<style lang=""></style>
