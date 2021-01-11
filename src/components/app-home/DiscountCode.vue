<template>
  <v-card flat color="error" rounded="xl">
    <v-card-text
      class="text-center white--text text--lighten-5 text-h5 font-weight-bold"
    >
      <span class="font-weight-medium"> Your discount code for the book: </span>
      <span class="font-weight-black">{{ user.discount_code }}</span>
      <br />
      <v-btn outlined color="white" class="mt-4" @click="showDialog = true">
        Purchase
      </v-btn>
    </v-card-text>
    <dialog-box v-model="showDialog">
      <template #title>
        <h3>Ohh... Nooo... &#128532;</h3>
      </template>

      <template #context>
        <p class="text-body-1">
          We regret to anounce that this function is out of order at the moment.
        </p>
      </template>
    </dialog-box>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showDialog: false
    };
  },
  computed: { ...mapState("auth", ["user"]) }
};
</script>
