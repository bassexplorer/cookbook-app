<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="true"
      :nudge-width="200"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
      </template>

      <v-card>
        <v-list>
          <v-list-item v-if="isLoggedIn">
            <v-list-item-avatar>
              <v-img v-if="imgUrl" :src="imgUrl" :alt="displayName"></v-img>
              <v-icon v-if="!imgUrl" alt="Avatar"> mdi-account-circle </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ displayName }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-if="!isLoggedIn">
            <v-list-item-content>
              <v-list-item-title>
                <v-btn rounded outlined :to="register"> Sign Up </v-btn>
                - or -
                <v-btn rounded outlined :to="login"> Log in </v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list dense>
          <div v-if="isLoggedIn">
            <v-list-item
              :to="link.link"
              v-for="link in appLinks"
              :key="link.title"
            >
              <v-list-item-content>
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>

          <div v-if="!isLoggedIn">
            <v-list-item
              v-for="link in links"
              :key="link.title"
              exact
              link
              :to="link.link"
            >
              <v-list-item-content>
                <v-list-item-title> {{ link.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>

          <v-list-item v-if="isLoggedIn">
            <v-list-item-content>
              <v-switch
                v-model="$vuetify.theme.dark"
                label="Dark Mode"
                class="mx-auto d-inline-flex"
              ></v-switch>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-if="isLoggedIn">
            <v-list-item-content>
              <v-list-item-action>
                <slot name="logout"></slot>
              </v-list-item-action>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <!-- <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false"> Cancel </v-btn>
          <v-btn color="primary" text @click="menu = false"> Save </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    displayName: {
      type: String,
      default: "User Name",
      required: true
    },
    links: {
      type: Array
    },
    appLinks: {
      type: Array
    }
  },
  computed: {
    ...mapState("auth", ["isLoggedIn"])
  },
  methods: { ...mapActions("auth", ["logout"]) },
  data: () => ({
    register: { name: "Registration" },
    login: { name: "LogIn" },
    menu: false
  })
};
</script>
<style lang="scss" scoped></style>
