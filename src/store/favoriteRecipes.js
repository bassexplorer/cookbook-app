/* eslint-disable no-unused-vars */
import firebase from "@/firebase";
import db from "../db";

const actions = {
  // The first argument of the actions functions is the context that contain {state,commit,rootState}
  userLikeRecipe(_, recipeObj) {
    const plusLike = recipeObj;
    plusLike.likes = recipeObj.likes + 1;
    console.log("after like", plusLike.likes);

    db.collection("recipes")
      .doc(recipeObj.id)
      .set(recipeObj);
  },

  userDislikeRecipe(_, recipeObj) {
    if (recipeObj.likes == 0) return;
    const plusLike = recipeObj;
    plusLike.likes = recipeObj.likes - 1;
    console.log("after dislike", plusLike.likes);

    db.collection("recipes")
      .doc(recipeObj.id)
      .set(recipeObj);
  },

  async saveUpdateRecipe({ rootState }, recipeObj) {
    const favoriteRecipesRootState = rootState["appInit"].userFavorites;
    // where we should put the recipe in users collection in which user document
    const currentUserId = rootState["auth"].user.id;
    const dbRef = await db.collection("users").doc(currentUserId);
    dbRef
      .collection("favorite_recipes")
      .doc(recipeObj.id)
      .set(recipeObj);
  },

  async removeRecipe({ rootState }, recipeObj) {
    const currenrUserId = rootState["auth"].user.id;
    const dbRef = await db.collection("users").doc(currenrUserId);

    const snapshot = await dbRef
      .collection("favorite_recipes")
      .doc(recipeObj.id)
      .delete();
  }
};

export default {
  namespaced: true,
  actions
  // state,
  // mutations
};
