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
  async addRecipe({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);
    console.log("auth.js", user);

    const ref = db.collection("users").doc(user.uid);
    const refId = ref.id;

    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      email: user.email,
      updated_at: firebase.firestore.FieldValue.serverTimestamp()
    };
    db.collection("users")
      .doc(refId)
      .set(setUser);

    // const userFavRecipes = {
    //   name: "kenyer",
    //   portionSize: 4,
    //   likes: 200,
    //   description: "It is a tasty recipe of a bread pit!",
    //   specialComment: " more bread",
    //   category: "Breakfast",
    //   ingredients: [
    //     {
    //       name: "mag",
    //       amount: "1",
    //       mesurment: "kg"
    //     },
    //     {
    //       name: "valami",
    //       amount: "1",
    //       mesurment: "cup"
    //     }
    //   ],
    //   steps: ["Add Flour", "Add Water", "Mix the dough", "Bake it at 200C"]
    // };
    // // const newDbRef = db.collection("users/" + refId);
    // db.collection("users")
    //   .doc(refId)
    //   .collection("favorite_recipes")
    //   .doc()
    //   .set(userFavRecipes);
    commit("setUser", setUser);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
