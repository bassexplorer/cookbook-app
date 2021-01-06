<template>
  <v-card class="mr-auto" flat max-width="344" color="transparent">
    <v-card-title class="display-1 text--primary"> Ingredients </v-card-title>

    <v-list-item v-for="ingredient in ingredients" :key="ingredient.name">
      <v-list-item-content>
        <v-list-item-title>
          <span class="font-weight-bold">
            {{ ingredient.amount }} {{ ingredient.mesurment }}
          </span>
          - {{ ingredient.name }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
<script>
export default {
  props: {
    ingredients: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang=""></style>
