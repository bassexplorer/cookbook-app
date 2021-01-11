/* eslint-disable no-unused-vars */
import vuetify from "./plugins/vuetify";
import Vue from "vue";
import App from "./App.vue";

import firebase from "./firebase";
import auth from "./auth";
import store from "./store/index";
import router from "./router/index";
import axios from "axios";

import CardTemplate from "./components/UI/CardTemplate.vue";
import DialogBox from "./components/UI/DialogBox.vue";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.component("card-template", CardTemplate);
Vue.component("dialog-box", DialogBox);

let app;
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
