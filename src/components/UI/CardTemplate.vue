<template>
  <v-card class="mx-auto my-12 rounded-lg" max-width="374" to="">
    <v-img height="250" src=""></v-img>

    <v-card-title>{{}}</v-card-title>

    <v-card-text>
      {{}}
    </v-card-text>

    <v-card-actions>
      <v-btn icon @click="fav = !fav" :class="fav ? 'red--text' : ''">
        <v-icon medium>{{ fav ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
      </v-btn>
      <div class="mr-5 grey--text subtitle-1">by 413 people</div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
      default: ""
    },
    displayName: {
      type: String,
      default: "User Name",
      required: true
    }
  },
  data() {
    return {
      active: false,
      fav: false
    };
  }
};
</script>
