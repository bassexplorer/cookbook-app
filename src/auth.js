/* eslint-disable no-unused-vars */
import firebase from "@/firebase";
import store from "@/store";
import db from "@/db";
import router from "@/router";

const admins = ["bassexplorer.beni@gmail.com", "zsofia.csagoly@gmail.com"];

function isAdmin(email) {
  return admins.includes(email);
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      email: user.email,
      updated_at: firebase.firestore.FieldValue.serverTimestamp(),
      discount_code: user.uid.slice(3, 12),
      admin: isAdmin(user.email)
    };
    db.collection("users")
      .doc(setUser.id)
      .set(setUser);
    // User is signed in.
    // add the user to the vuex store
    store.commit("auth/setUser", setUser);

    // navigate the page to the app home
    router.push({ name: "AppHome" }).catch(err => {
      // console.log(err);
    });
  } else {
    // No user is signed in.
    router.push({ name: "Home" }).catch(err => {
      // console.log(err);
    });
    store.commit("auth/setUser", null);
  }
});
