<template>
  <v-card flat class="pa-0 ma-0 rounded-xl" color="transparent">
    <div class="d-flex">
      <v-col cols="4" class="pa-0">
        <v-img
          class="mt-0 rounded-xl"
          src="https://picsum.photos/500/300?image=40"
        ></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title justify-space-between>
          <h1>{{ title }}</h1>

          <v-card-actions class="ml-auto">
            <v-btn
              :outlined="!fav"
              @click="fav = !fav"
              class="rounded-l-xl"
              :color="fav ? 'error' : ''"
              :class="fav ? 'text-white' : ''"
            >
              <v-icon medium class="mr-2">
                {{ fav ? "mdi-heart" : "mdi-heart-outline" }}
              </v-icon>
              Save{{ fav ? "d" : "" }}
            </v-btn>
          </v-card-actions>
        </v-card-title>
        <v-card-text class="text--primary d-flex">
          <div class="mr-8">
            <v-icon class="mr-2">fa-user-friends</v-icon>{{ portion }} persons
          </div>

          <div>
            <v-icon class="mr-2">mdi-heart</v-icon>by {{ likes }} people
          </div>
        </v-card-text>
      </v-col>
    </div>
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
    }
  },
  data() {
    return {
      fav: false
    };
  }
};
</script>

<style lang="scss" scoped>
.col.col-8,
.v-card__title,
.v-card__actions {
  padding-right: 0;
}
</style>
