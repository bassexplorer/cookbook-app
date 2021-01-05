<template>
  <v-menu offset-y origin="center center" transition="scale-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-list rounded dense>
        <v-list-item dense link v-bind="attrs" v-on="on">
          <v-list-item-avatar size="30">
            <v-img v-if="imgUrl" :src="imgUrl" alt="Avatar"></v-img>
            <v-icon v-if="!imgUrl" alt="Avatar"> mdi-account-circle </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            {{ displayName }}
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </template>

    <v-list dense>
      <v-list-item>
        <v-list-item-content>
          <slot name="switch"></slot>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <slot name="logout"></slot>
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
