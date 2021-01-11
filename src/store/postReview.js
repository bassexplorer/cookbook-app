/* eslint-disable no-unused-vars */
import { firestoreAction } from "vuexfire";
import firebase from "@/firebase";
import db from "../db";

const state = {
  userReviews: []
};
const actions = {
  // The first argument of the actions functions is the context that contain {state,commit,rootState}
  //   userLikeReview(_, recipeObj) {
  //     const plusLike = recipeObj;
  //     plusLike.likes = recipeObj.likes + 1;
  //     console.log("after like", plusLike.likes);

  //     db.collection("recipes")
  //       .doc(recipeObj.id)
  //       .set(recipeObj);
  //   },

  //   userDislikeReview(_, recipeObj) {
  //     if (recipeObj.likes == 0) return;
  //     const plusLike = recipeObj;
  //     plusLike.likes = recipeObj.likes - 1;
  //     console.log("after dislike", plusLike.likes);

  //     db.collection("recipes")
  //       .doc(recipeObj.id)
  //       .set(recipeObj);
  //   },
  initReviews: firestoreAction(
    async ({ bindFirestoreRef, rootState }, recipeId) => {
      await bindFirestoreRef(
        "userReviews",
        db
          .collection("recipes")
          .doc(recipeId)
          .collection("user_reviews")
      );
    }
  ),
  tearDownReviews: firestoreAction(async ({ unbindFirestoreRef }) => {
    await unbindFirestoreRef("userReviews");
  }),
  // when a user publish a review of a recipe
  async saveReview(reviewObj) {
    const dbRef = await db.collection("recipes").doc(reviewObj.recipeId);
    const reviewId = dbRef.collection("favorite_recipes").doc();
    const reviewObjWithId = {
      ...reviewObj,
      reviewId: reviewId
    };
    dbRef
      .collection("favorite_recipes")
      .doc(reviewObjWithId.recipeId)
      .set(reviewObjWithId);
  },
  // just the owner user can do it
  async removeReview({ rootState }, reviewObj) {
    const currentUserId = rootState["auth"].user.id;
    if (reviewObj.author.id == currentUserId) {
      const dbRef = await db.collection("recipes").doc(reviewObj.recipeId);

      const snapshot = await dbRef
        .collection("favorite_recipes")
        .doc(reviewObj.id)
        .delete();
    } else {
      console.log("You can't delete this review");
      return;
    }
  },
  // everybody when a user like the review
  async updateReview({ commit }, reviewObj) {
    const dbRef = await db.collection("users").doc(reviewObj.recipeId);

    const snapshot = await dbRef
      .collection("favorite_recipes")
      .doc(reviewObj.id)
      .set();
  }
};

export default {
  namespaced: true,
  actions
};
