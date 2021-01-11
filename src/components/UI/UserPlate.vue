<template>
  <v-menu offset-y origin="center center" transition="scale-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-list rounded>
        <v-list-item link v-bind="attrs" v-on="on">
          <v-list-item-avatar size="30" class="pa-0 ma-0 mr-4">
            <v-img v-if="imgUrl" :src="imgUrl" alt="Avatar"></v-img>
            <v-icon v-if="!imgUrl" alt="Avatar"> mdi-account-circle </v-icon>
          </v-list-item-avatar>

          <v-list-item-content class="pa-0 ma-0">
            <v-list-item-title>
              {{ displayName }}
            </v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </template>

    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center">
            <v-switch
              v-model="$vuetify.theme.dark"
              label="Dark Mode"
              class="mx-auto d-inline-flex"
            ></v-switch>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center">
            <slot name="logout"></slot>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
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
    }
  }
};
</script>

<style scoped lang="scss">
.theme--light.v-list,
.theme--dark.v-list {
  background: transparent;
}
.v-menu__content {
  background-color: inherit;
}
</style>
