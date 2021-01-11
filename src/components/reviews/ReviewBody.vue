<template>
  <div>
    <v-card
      outlined
      elevation=""
      max-width="1060"
      min-height="100"
      v-for="item in sortedReviews"
      :key="item.title"
      class="mr-auto mb-4 rounded-xl"
    >
      <v-list three-line color="transparent">
        <v-list-item :key="item.title">
          <v-list-item-avatar size="60">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content class="pb-0">
            <v-list-item-title
              class="text-h6"
              v-html="item.title"
            ></v-list-item-title>
            <v-list-item-subtitle
              class="text-body-1"
              v-html="item.review"
            ></v-list-item-subtitle>
            <v-list-item-action
              class="flex-row justify-start pa-0 ma-0 align-center"
            >
              <div>
                <v-btn text>
                  <v-icon class="mr-2 red--text">mdi-heart</v-icon>
                  like
                </v-btn>
              </div>
              <v-spacer></v-spacer>
              <div>
                {{ item.likes }}
                <v-icon color="red">mdi-heart</v-icon>
              </div>
            </v-list-item-action>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Ran Dominic",
        review: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        likes: 20
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Bounder David",
        review: `Wish I could come, but I'm out of town this weekend.`,
        likes: 8
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Dice Ricevoy",
        review: "Do you have Paris recommendations? Have you ever been?",
        likes: 10
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Haley Baley",
        review:
          "Have any ideas about what we should get Heidi for her birthday?",
        likes: 20
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Nomay Doma",
        review: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        likes: 80
      }
    ]
  }),
  computed: {
    sortedReviews() {
      const sortedReviews = [...this.items].sort((a, b) => {
        return b.likes - a.likes;
      });

      return sortedReviews;
    }
  }
};
</script>
<style lang="scss" scoped>
.theme--dark.v-sheet--outlined {
  border: thin solid #ffffffc5;
}

.theme--light.v-sheet--outlined {
  border: thin solid #00000085;
}
</style>
