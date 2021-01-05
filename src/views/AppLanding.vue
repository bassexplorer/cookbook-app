<template>
  <v-card class="AppLanging rounded-xl">
    <v-container>
      <!-- <h1>Category Adder</h1>
      <v-text-field
        v-model="category.name"
        label="Category Name"
        required
        :rules="[v => !!v || 'Name is required']"
      ></v-text-field>
      <v-text-field
        v-model="category.description"
        label="Category Description"
        required
        :rules="[v => !!v || 'Desc is required']"
      ></v-text-field>
      <v-btn @click.prevent="onAddCategory">Add category</v-btn> -->

      <h1>Recipe seeder</h1>
      <v-form @submit.prevent="submitRecipe" ref="form">
        <h2>Basics</h2>
        <v-text-field
          v-model="recipe.name"
          label="Recipe Title"
          required
          :rules="[v => !!v || 'Name is required']"
        ></v-text-field>
        <pre class="mt-n4 mb-4 ml-auto d-inline-flex">
        slug: {{ generatedSlug }} 
        </pre>
        <v-slider
          v-model="recipe.portionSize"
          :label="'Portion Size: ' + recipe.portionSize"
          :thumb-label="true"
        ></v-slider>

        <v-select
          v-model="recipe.category"
          :items="fillCategory"
          :rules="[v => !!v || 'Category is required']"
          label="Recipe category"
          required
        ></v-select>

        <v-text-field
          v-model="recipe.imageUrl"
          :counter="10"
          :rules="[v => !!v || 'Image Url is required']"
          label="Recipe Image Url"
          required
        ></v-text-field>

        <h2>Ingredients adder</h2>

        <v-row class="align-center">
          <v-text-field
            v-model.trim="ingredient.name"
            :counter="10"
            label="Name"
            required
            class="mx-5"
          ></v-text-field>

          <v-text-field
            v-model.trim="ingredient.amount"
            :counter="10"
            label="Amount"
            required
            type="number"
            class="m-5"
          ></v-text-field>

          <v-text-field
            v-model.trim="ingredient.mesurment"
            :counter="4"
            label="Mesurement"
            required
            class="ml-5"
          ></v-text-field>

          <v-btn class="mx-5" @click.prevent="addIngredient">
            Add ingredient
          </v-btn>
        </v-row>

        <v-card class="justify-center mx-auto d-flex" max-width="400" tile>
          <p v-if="ingredNotOk">Something's not okay, please check!</p>
        </v-card>

        <v-card class="mx-auto" max-width="400" tile>
          <v-list-item
            two-line
            v-for="(ingred, index) in recipe.ingredients"
            :key="ingred.name"
          >
            <v-list-item-content>
              <v-list-item-title class="d-flex justify-space-between">
                <h3>{{ ingred.name }}</h3>
                <v-btn @click.prevent="removeIngredient(index)">Remove</v-btn>
              </v-list-item-title>
              <v-list-item-subtitle>
                <h4>
                  {{ ingred.amount }}
                  {{ ingred.mesurment }}
                </h4>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <h2>Step adder</h2>

        <v-row class="align-center">
          <v-textarea
            v-model.trim="step"
            label="Step"
            required
            class="mx-5"
          ></v-textarea>

          <v-btn class="mx-5" @click.prevent="addStep"> Add Step </v-btn>
        </v-row>

        <v-card class="justify-center mx-auto d-flex" max-width="400" tile>
          <p v-if="stepNotOk">Something's not okay, please check!</p>
        </v-card>

        <v-card class="mx-auto" tile>
          <v-list-item
            two-line
            v-for="(step, index) in recipe.steps"
            :key="step"
          >
            <v-list-item-content>
              <v-list-item-title class="d-flex justify-space-between">
                <p>{{ step }}</p>
                <v-btn @click.prevent="removeStep(index)">Remove</v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <h2>Finish</h2>
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Are you sure it is correct?"
          required
        ></v-checkbox>

        <v-btn class="mr-4" @click="validate"> Validate </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
        <v-btn type="submit" color="success" :disabled="!valid">
          Add recipe
        </v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "AppLanding",
  data: () => ({
    ingredNotOk: false,
    stepNotOk: false,
    valid: false,
    select: null,
    recipeCategoryOpt: [],
    checkbox: false,
    ingredient: {
      name: "",
      amount: "",
      mesurment: ""
    },
    step: "",
    category: {
      name: "",
      description: ""
    },

    recipe: {
      name: "",
      slug: "",
      portionSize: 4,
      likes: 0,
      category: "",
      imageUrl: "",
      notes: "",
      ingredients: [],
      steps: []
    }
  }),

  methods: {
    validate() {
      const validation = this.$refs.form.validate();
      if (validation) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    addIngredient() {
      if (
        !this.ingredient.name ||
        !this.ingredient.amount ||
        !this.ingredient.mesurment
      ) {
        this.ingredNotOk = true;
      } else {
        this.ingredNotOk = false;
        this.recipe.ingredients.push(this.ingredient);
        this.ingredient = {
          name: "",
          amount: "",
          mesurment: ""
        };
      }
    },
    addStep() {
      if (!this.step) {
        this.stepNotOk = true;
      } else {
        this.stepNotOk = false;
        this.recipe.steps.push(this.step);
        this.step = "";
      }
    },
    removeIngredient(index) {
      this.recipe.ingredients.splice(index, 1);
    },
    removeStep(index) {
      this.recipe.steps.splice(index, 1);
    },
    submitRecipe() {
      this.loadRecipe(this.recipe);
      console.log("submitted");
    },
    onAddCategory() {
      if (this.category.name === "" || this.category.description === "") return;
      this.addCategory(this.category);
      this.category = {
        name: "",
        description: ""
      };
    },
    ...mapActions("appInit", ["init"]),
    ...mapActions("seedScript", ["loadRecipe", "addCategory"])
  },
  computed: {
    fillCategory() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.recipeCategoryOpt = [];
      this.recipeCategories.map(item => {
        const category = {
          text: item.name,
          value: item
        };
        this.recipeCategoryOpt.push(category);
      });

      return this.recipeCategoryOpt;
    },
    generatedSlug() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.recipe.slug = this.recipe.name
        .trim()
        .split(" ")
        .join("_")
        .toLowerCase();
      return this.recipe.slug;
    },
    ...mapState("appInit", ["recipeCategories"])
  },
  mounted() {
    this.init();
  }
};
</script>

<style>
.v-menu__content {
  background: inherit;
}
</style>
