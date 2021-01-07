<template>
  <v-app-bar app elevate-on-scroll color="white" shrink-on-scroll prominent>
    <v-container d-flex justify-center align-center class="align-self-center">
      <div v-if="!isLoggedIn">
        <v-btn
          v-for="link in links"
          exact
          :key="link.title"
          :to="link.link"
          text
        >
          {{ link.title }}
        </v-btn>
      </div>

      <div v-if="isLoggedIn">
        <v-btn :to="link.link" text v-for="link in isAdmin" :key="link.title">
          {{ link.title }}
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-img
        alt="Vraa Hojskole Logo"
        class="shrink logo"
        contain
        src="../../assets/base-imgs/vrahojskole-logo.svg"
        transition="scale-transition"
      />

      <v-spacer></v-spacer>

      <v-btn rounded outlined class="mr-2" :to="register" v-if="!isLoggedIn">
        Sign Up
      </v-btn>
      <v-btn rounded outlined class="mr-2" :to="login" v-if="!isLoggedIn">
        Log in
      </v-btn>
      <!-- <v-btn
        rounded
        outlined
        class="mr-2"
        @click="loginGoogle()"
        v-if="!isLoggedIn"
      >
        Sign Up
      </v-btn> -->

      <user-plate
        rounded
        :imgUrl="user.image"
        :displayName="user.name"
        v-if="isLoggedIn"
      >
        <template #logout>
          <v-btn text @click="logout()">
            <v-icon>mdi-logout</v-icon> Log out
          </v-btn>
        </template>
        <template #switch>
          <v-switch
            v-model="$vuetify.theme.dark"
            label="Dark Mode"
            class="mx-auto"
          ></v-switch>
        </template>
      </user-plate>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UserPlate from "../UI/UserPlate";

export default {
  name: "TopNavigation",
  components: { UserPlate },
  computed: {
    ...mapState("auth", ["user", "isLoggedIn"]),
    isAdmin() {
      // console.log(this.user.admin);
      if (this.user.admin) {
        return this.appLinks;
      } else {
        return this.appLinks.filter(item => {
          return !item.adminOnly;
        });
      }
    }
  },
  methods: { ...mapActions("auth", ["loginGoogle", "logout"]) },
  data: () => ({
    links: [
      { title: "Home", link: { name: "Home" } },
      { title: "Recipes", link: "/#recipes" },
      { title: "Premium", link: "/#premium" },
      { title: "Book", link: "/#book" }
    ],
    appLinks: [
      { title: "Home", link: { name: "AppHome" }, adminOnly: false },
      { title: "Recipes", link: { name: "AllRecipes" }, adminOnly: false },
      { title: "Add Recipe", link: { name: "AddRecipe" }, adminOnly: true }
    ],
    register: { name: "Registration" },
    login: { name: "LogIn" }
  })
};

// :to="{ name: 'CategoryLoader', params: { categoryId: item.slug } }"
</script>
<style lang="scss" scoped>
.v-app-bar {
  .logo {
    max-height: 110px !important;
    transition: all 0.5s;
  }
  &--is-scrolled .logo {
    max-height: 50px !important;
    transition: all 0.5s;
  }
}

.theme--dark.v-app-bar {
  background: #383358 !important;
  color: #ffe5e5 !important;
}

.theme--dark.v-app-bar .logo {
  filter: brightness(12.5);
}
</style>
