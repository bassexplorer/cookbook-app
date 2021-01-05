<template>
  <v-card color="white" width="370" class="mx-auto">
    <v-list>
      <v-list-item link @click="loginGoogle()">
        <v-list-item-icon>
          <v-icon>fab fa-google</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> {{ method }} with Google </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list-group prepend-icon="fa-envelope" no-action :value="true">
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title> {{ method }} with Email</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item>
        <slot></slot>
      </v-list-item>
    </v-list-group>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    method: {
      type: String,
      required: true,
      default: ""
    }
  },
  methods: { ...mapActions("auth", ["loginGoogle"]) }
};
</script>
