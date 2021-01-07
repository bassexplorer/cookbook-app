import Vue from "vue";
import { vuexfireMutations } from "vuexfire";
import Vuex from "vuex";
import auth from "./auth";
import seedScript from "./seedScript";
import appInit from "./appInit";
import favoriteRecipes from "./favoriteRecipes";

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {
    auth,
    seedScript,
    appInit,
    favoriteRecipes
  }
});
