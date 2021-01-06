<template>
  <v-card
    class="my-12 rounded-lg"
    max-width="374"
    :to="{ name: 'Recipe', params: { recipeId: slug } }"
  >
    <v-img
      height="250"
      :src="require(`../../assets/recipeIMG/${this.missingImg}`)"
    ></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <!-- <v-card-text> {{}} </v-card-text> -->

    <v-card-actions>
      <v-btn icon @click="fav = !fav" :class="fav ? 'red--text' : ''">
        <v-icon medium>{{ fav ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
      </v-btn>
      <div class="mr-5 grey--text subtitle-1">by {{ likes }} people</div>
      <v-spacer></v-spacer>
      <div class="mr-3">
        <v-icon class="mr-2">fa-user-friends</v-icon>{{ portion }} persons
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
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
    }
  },
  computed: {
    missingImg() {
      if (!this.imageUrl) {
        return "noRecipeImg.jpg";
      } else {
        return this.imageUrl;
      }
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
