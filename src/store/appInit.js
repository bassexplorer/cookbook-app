import { firestoreAction } from "vuexfire";
import db from "@/db";

const state = {
  recipes: [],
  recipeCategories: []
};

const actions = {
  init: firestoreAction(async ({ bindFirestoreRef }) => {
    await bindFirestoreRef("recipes", db.collection("recipes"));
    await bindFirestoreRef("recipeCategories", db.collection("categories"));
  })
};

export default {
  namespaced: true,
  actions,
  state
};