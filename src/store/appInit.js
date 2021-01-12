import { firestoreAction } from "vuexfire";
import db from "@/db";

const state = {
  recipes: [],
  demoRecipes: [],
  recipeCategories: [],
  userFavorites: [],
  ourSuggestions: [],
  isLoading: false
};

const mutations = {
  setFavoriteRecipes(state, favoritesSnaphot) {
    let mostFavorites = [];
    favoritesSnaphot.forEach(doc => {
      mostFavorites.push(doc.data());
    });

    state.demoRecipes = mostFavorites;
  },
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  setSuggestions(state, suggestions) {
    state.ourSuggestions = suggestions;
  }
};

const actions = {
  homeInit: async ({ commit }) => {
    const recipesRef = db.collection("recipes");
    const theMostLikedOnes = await recipesRef
      .orderBy("likes", "desc")
      .limit(4)
      .get();
    commit("setFavoriteRecipes", theMostLikedOnes);
  },

  init: firestoreAction(async ({ bindFirestoreRef, commit, rootState }) => {
    commit("setLoading", true);
    await bindFirestoreRef("recipes", db.collection("recipes"));
    await bindFirestoreRef("recipeCategories", db.collection("categories"));
    const currenrUserId = rootState["auth"].user.id;

    await bindFirestoreRef(
      "userFavorites",
      db
        .collection("users")
        .doc(currenrUserId)
        .collection("favorite_recipes")
    );

    setTimeout(() => {
      commit("setLoading", false);
      // }, 0);
    }, 3500);
  })
};

const getters = {
  recipesReady(state) {
    return state.recipes;
  }
};

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
};
