import db from "../db";
// import { state } from "./appInit";

// const state = {
//   recipes: [],
//   recipeCategories: []
// };

const mutations = {
  setRecipe(state, recipe) {
    console.log("seedScript.js ", recipe);
    state.recipes.push(recipe);
  },
  setRecipeCategories(state, category) {
    state.recipeCategories.push(category);
    console.log("seedScript.js category", state.recipeCategories);
  }
};

const actions = {
  async fetchCategory({ commit }) {
    const snapshot = await db.collection("categories").get();
    snapshot.docs.map(doc => commit("setRecipeCategories", doc.data()));
  },

  // eslint-disable-next-line no-unused-vars
  addCategory({ commit }, categoryObj) {
    const ref = db.collection("categories").doc();
    const refId = ref.id;
    const newCat = {
      id: refId,
      ...categoryObj
    };
    console.log(newCat);
    db.collection("categories")
      .doc(refId)
      .set(newCat);
  },

  // eslint-disable-next-line no-unused-vars
  loadRecipe({ commit }, recipeObj) {
    const docId = db.collection("recipes").doc();

    const recipe = {
      ...recipeObj
    };

    // this is for FireBase Firestore.
    db.collection("recipes")
      .doc(docId.id)
      .set(recipe);
    // this is for the vue store to be able to track in the app whats changed
    commit("setRecipe", recipe);
  }
};

export default {
  namespaced: true,
  actions,
  mutations
  // state
};
