<template>
  <v-card flat color="error" rounded="xl">
    <v-card-text
      class="white--text text--lighten-5 text-center text-h5 font-weight-bold"
    >
      Your discount code for the book: <br />
      {{ user.discount_code }}
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState("auth", ["user"]) },

  mounted() {}
};
</script>
