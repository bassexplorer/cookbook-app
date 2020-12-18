import Vue from "vue";
import App from "./App.vue";

// eslint-disable-next-line no-unused-vars
import firebase from "./firebase";
import { firestorePlugin } from "vuefire";
import store from "./store/index";
import router from "./router/index";
import axios from "axios";

import vuetify from "./plugins/vuetify";

Vue.use(firestorePlugin);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
