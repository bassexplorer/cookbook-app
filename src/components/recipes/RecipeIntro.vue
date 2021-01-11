<template>
  <v-card flat class="pa-0 ma-0 rounded-xl" color="transparent">
    <v-container fluid class="pt-0">
      <v-row>
        <v-col xl="4" lg="4" md="4" sm="4" class="pa-0">
          <v-img
            class="mt-0 rounded-xl"
            :src="require(`../../assets/recipeIMG/${this.imageUrl}`)"
          ></v-img>
        </v-col>
        <v-col xl="8" lg="8" md="8" sm="8">
          <v-card-title justify-space-between>
            <h1 class="primary--text mr-7">{{ title }}</h1>

            <v-card-actions class="ml-auto">
              <v-btn
                :outlined="!likedByUser"
                :disabled="demo"
                @click="likeThisRecipe"
                class="rounded-l-xl"
                :color="likedByUser ? 'error' : ''"
                :class="likedByUser ? 'text-white' : ''"
              >
                <v-icon medium class="mr-2">
                  {{ likedByUser ? "mdi-heart" : "mdi-heart-outline" }}
                </v-icon>
                Save{{ likedByUser ? "d" : "" }}
              </v-btn>
            </v-card-actions>
          </v-card-title>
          <v-card-text class="text--primary d-flex">
            <div class="mr-8">
              <v-icon class="mr-2">fa-user-friends</v-icon>
              {{ portion }} persons
            </div>

            <div>
              <v-icon class="mr-2">mdi-heart</v-icon>
              by {{ likes }} people
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: {
    portion: {
      type: Number,
      required: true,
      default: 0
    },
    likes: {
      type: Number,
      default: 0,
      required: true
    },
    title: {
      type: String,
      default: "The title is missing",
      required: true
    },
    imageUrl: {
      type: String,
      default: "",
      required: true
    },
    likedByUser: {
      type: Boolean,
      default: false,
      required: true
    },
    demo: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      fav: this.likedByUser
    };
  },
  computed: {
    generatedImageUrl() {
      const url = "../../assets/recipeIMG/" + this.imageUrl;
      console.log(url);
      console.log(this.likedByUser);
      return url;
    }
  },
  methods: {
    likeThisRecipe() {
      this.$emit("liked-By-User", this.fav);
    }
  }
};
</script>

<style lang="scss" scoped>
.col-sm-8,
.col-md-8,
.col-lg-8,
.col-xl-8,
.v-card__title,
.v-card__actions {
  padding-right: 0;
}
</style>
