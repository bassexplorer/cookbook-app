/* eslint-disable no-unused-vars */
import { firestoreAction } from "vuexfire";
import firebase from "@/firebase";
import db from "../db";

const state = {
  userReviews: []
};
const actions = {
  initReviews: firestoreAction(
    async ({ bindFirestoreRef, rootState }, recipeId) => {
      // console.log(recipeId);
      // console.log(rootState);

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
  async saveReview(_, reviewObj) {
    const dbRef = await db.collection("recipes").doc(reviewObj.recipeId);
    const reviewId = dbRef.collection("user_reviews").doc();
    const reviewObjWithId = {
      ...reviewObj,
      reviewId: reviewId.id,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    };
    // console.log(reviewObjWithId);
    dbRef
      .collection("user_reviews")
      .doc(reviewObjWithId.reviewId)
      .set(reviewObjWithId);
  },
  // just the owner user can do it
  async deleteReview({ rootState }, reviewObj) {
    const currentUserId = rootState["auth"].user.id;
    if (reviewObj.author.id == currentUserId) {
      const dbRef = await db.collection("recipes").doc(reviewObj.recipeId);

      dbRef
        .collection("user_reviews")
        .doc(reviewObj.reviewId)
        .delete();
    } else {
      console.log("You can't delete this review");
      return;
    }
  },
  // everybody when a user like the review
  async updateReview({ rootState }, reviewObj) {
    const currentUserId = rootState["auth"].user.id;
    const dbRef = await db.collection("recipes").doc(reviewObj.recipeId);
    const reviewObjCopy = reviewObj;

    if (reviewObjCopy.likedBy.includes(currentUserId)) {
      reviewObjCopy.likedBy = reviewObjCopy.likedBy.filter(user => {
        return user !== currentUserId;
      });
      reviewObjCopy.likes = reviewObj.likes - 1;
      dbRef
        .collection("user_reviews")
        .doc(reviewObjCopy.reviewId)
        .set(reviewObjCopy);
    } else {
      reviewObjCopy.likedBy.push(currentUserId);
      reviewObjCopy.likes = reviewObj.likes + 1;
      dbRef
        .collection("user_reviews")
        .doc(reviewObjCopy.reviewId)
        .set(reviewObjCopy);
    }
  }
};

export default {
  namespaced: true,
  actions,
  state
};
