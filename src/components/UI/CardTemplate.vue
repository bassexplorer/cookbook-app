<template>
  <v-card
    class="mb-6 rounded-lg"
    max-width="374"
    elevation="6"
    :to="linkToRecipe"
  >
    <v-img
      height="250"
      :alt="title + ' on a plate'"
      :src="require(`../../assets/recipeIMG/${this.missingImg}`)"
    ></v-img>

    <v-card-title class="primary--text">{{ title }}</v-card-title>

    <!-- <v-card-text> {{}} </v-card-text> -->

    <v-card-actions>
      <v-btn icon @click="fav = !fav" :class="fav ? 'red--text' : ''">
        <v-icon medium>{{ fav ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
      </v-btn>
      <div class="mr-5 subtitle-1">by {{ likes }} people</div>
      <v-spacer></v-spacer>
      <div class="mr-3">
        <v-icon class="mr-2">fa-user-friends</v-icon>{{ portion }} persons
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
      default: ""
    },
    title: {
      type: String,
      default: "",
      required: true
    },
    slug: {
      type: String,
      default: "",
      required: true
    },
    likes: {
      type: Number,
      default: 0,
      required: true
    },
    portion: {
      type: Number,
      default: 0,
      required: true
    },
    likedByUser: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    missingImg() {
      if (!this.imageUrl) {
        return "noRecipeImg.jpg";
      } else {
        return this.imageUrl;
      }
    },
    ...mapState("auth", ["isLoggedIn"]),
    linkToRecipe() {
      if (this.isLoggedIn) {
        return { name: "Recipe", params: { recipeId: this.slug } };
      } else {
        return {
          name: "DemoRecipe",
          params: { recipeId: this.slug },
          query: { teaser: true }
        };
      }
    }
  },
  data() {
    return {
      active: false,
      fav: true
    };
  }
};
</script>

<style lang="scss" scoped></style>
