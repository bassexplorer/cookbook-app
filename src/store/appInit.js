/* eslint-disable no-unused-vars */
import { firestoreAction } from "vuexfire";
import db from "@/db";
import store from "@/store";

const state = {
  recipes: [],
  demoRecipes: [],
  recipeCategories: [],
  userReviews: [],
  userFavorites: []
};

const actions = {
  homeInit: firestoreAction(async ({ bindFirestoreRef }) => {
    await bindFirestoreRef("demoRecipes", db.collection("demo_recipes"));
  }),

  init: firestoreAction(async ({ bindFirestoreRef, rootState }) => {
    await bindFirestoreRef("recipes", db.collection("recipes"));
    await bindFirestoreRef("recipeCategories", db.collection("categories"));
    await bindFirestoreRef("userReviews", db.collection("user_reviews"));
    const currenrUserId = rootState["auth"].user.id;

    await bindFirestoreRef(
      "userFavorites",
      db
        .collection("users")
        .doc(currenrUserId)
        .collection("favorite_recipes")
    );
  })

  // initUserFavorites: firestoreAction(
  //   async ({ bindFirestoreRef, rootState }) => {
  //     const currenrUserId = rootState["auth"].user.id;
  //     await bindFirestoreRef(
  //       "userFavorites",
  //       db
  //         .collection("users")
  //         .doc(currenrUserId)
  //         .collection("favorite_recipes")
  //     );
  //   }
  // )

  // init({ state, rootState }) {
  //   const currenrUserId = rootState["auth"].user.id;

  //   firestoreAction(async ({ bindFirestoreRef }) => {
  //     // if (!state.recipes[0]) {
  //     await bindFirestoreRef("recipes", db.collection("recipes"));
  //     // }
  //     await bindFirestoreRef("recipeCategories", db.collection("categories"));
  //     await bindFirestoreRef("userReviews", db.collection("user_reviews"));
  //     await bindFirestoreRef(
  //       "userFavorites",
  //       db
  //         .collection("users")
  //         .doc(currenrUserId)
  //         .collection("user_favorites")
  //     );
  //   });
  // }
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
  getters
};
