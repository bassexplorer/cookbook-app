<template>
  <v-app-bar app elevate-on-scroll color="white" shrink-on-scroll prominent>
    <v-container d-flex justify-center align-center class="align-self-center">
      <div v-if="!isLoggedIn && !$vuetify.breakpoint.mobile">
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

      <div v-if="isLoggedIn && !$vuetify.breakpoint.mobile">
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

      <div v-if="!$vuetify.breakpoint.mobile">
        <v-btn rounded outlined class="mr-2" :to="register" v-if="!isLoggedIn">
          Sign Up
        </v-btn>
        <v-btn rounded outlined class="mr-2" :to="login" v-if="!isLoggedIn">
          Log in
        </v-btn>
      </div>

      <mobile-nav
        v-if="$vuetify.breakpoint.mobile"
        :links="links"
        :appLinks="isAdmin"
        :imgUrl="user.image"
        :displayName="user.name"
      >
        <template #logout>
          <v-btn text @click="logout()">
            <v-icon>mdi-logout</v-icon> Log out
          </v-btn>
        </template>
      </mobile-nav>

      <user-plate
        rounded
        :imgUrl="user.image"
        :displayName="user.name"
        v-if="isLoggedIn && !$vuetify.breakpoint.mobile"
      >
        <template #logout>
          <v-btn text @click="logout()">
            <v-icon>mdi-logout</v-icon> Log out
          </v-btn>
        </template>
      </user-plate>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UserPlate from "../UI/UserPlate";
import MobileNav from "./MobileNav";

export default {
  name: "TopNavigation",
  components: { UserPlate, MobileNav },
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
  methods: {
    ...mapActions("auth", ["logout"])
  },
  data: () => ({
    toggleMenu: false,
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
    login: { name: "LogIn" },
    group: null
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
  background: darken(#383358, 10%) !important;
  color: #ffe5e5 !important;

  &--is-scrolled {
    background: #383358 !important;
  }
}

.theme--dark.v-app-bar .logo {
  filter: brightness(12.5);
}
</style>
