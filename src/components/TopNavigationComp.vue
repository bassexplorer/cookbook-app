<template>
  <v-app-bar app color="primary">
    <v-btn elevation="2" to="/"> Home </v-btn> |
    <v-btn elevation="2" to="/about"> About us </v-btn>

    <v-spacer></v-spacer>

    <v-img
      alt="Vuetify Logo"
      class="shrink"
      contain
      src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
      transition="scale-transition"
      width="40"
    />

    <v-spacer></v-spacer>

    <v-btn rounded class="mr-2" @click="loginGoogle()">
      <v-icon color="red darken-3" class="mr-1">fab fa-google</v-icon>oogle
      Login
    </v-btn>
    <v-btn rounded> <v-icon>mdi-logout</v-icon> Logout </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TopNavigation",
  computed: { ...mapState("auth", ["user", "isLoggedIn"]) },
  methods: { ...mapActions("auth", ["loginGoogle", "logout", "loginEmail"]) }
};
</script>
