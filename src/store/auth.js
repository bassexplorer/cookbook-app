import firebase from "@/firebase";
import db from "@/db.js";

const state = {
  user: {},
  isLoggedIn: false
};

const mutations = {
  setUser(state, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  }
};

const actions = {
  async loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      // After this the auth state change so it goes to the main auth.js
    } catch (error) {
      console.log(error);
    }
  },

  async loginWithEmail(_, user) {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log(error);
    }
  },

  async signupWithEmail({ commit }, userData) {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(userData.email, userData.password)
        .then(() => {
          return firebase.auth().currentUser;
        })
        .then(createdUser => {
          if (createdUser) {
            createdUser.updateProfile({
              displayName: userData.firstName + " " + userData.lastName
            });
            const setUser = {
              id: createdUser.uid,
              name: createdUser.displayName,
              image: createdUser.photoURL,
              email: createdUser.email,
              updated_at: firebase.firestore.FieldValue.serverTimestamp(),
              discount_code: createdUser.uid.slice(3, 12)
            };
            return setUser;
          }
        })
        .then(setUser => {
          db.collection("users")
            .doc(setUser.id)
            .set(setUser);

          commit("setUser", setUser);
        });
    } catch (error) {
      console.log(error);
    }
  },

  async logout() {
    firebase.auth().signOut();
  }
};
const getters = {
  currentUser(state) {
    return state.user;
  },
  isLoggedIn(state) {
    return state.isLoggedIn;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
