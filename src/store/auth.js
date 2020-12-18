import firebase from "@/firebase";
import db from "../db";

const state = {
  user: {},
  isLoggedIn: false
};

const mutations = {
  setUser(state, user) {
    console.log("auth.js", user);
    state.user = user;
    state.isLoggedIn = true;
  }
};

const actions = {
  async loginGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);
    console.log("auth.js", user);
    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      email: user.email,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    };
    db.collection("users")
      .doc(setUser.id)
      .set(setUser);
    commit("setUser", setUser);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
