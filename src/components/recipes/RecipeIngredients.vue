<template>
  <v-card class="mr-auto" flat max-width="344" color="transparent">
    <v-card-title class="display-1 primary--text"> Ingredients </v-card-title>

    <v-list-item v-for="ingredient in ingredientAmount" :key="ingredient.name">
      <v-list-item-content>
        <v-list-item-title class="text-body-1">
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
    },
    portionBase: {
      type: Number,
      required: true,
      default: 0
    },
    requiredPortion: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    ingredientAmount() {
      return this.ingredients.map(ingredient => {
        const changePortion =
          (parseInt(ingredient.amount) / this.portionBase) *
          this.requiredPortion;

        return {
          name: ingredient.name,
          amount: changePortion,
          mesurment: ingredient.mesurment
        };
      });
    }
  }
};
</script>
<style lang=""></style>
