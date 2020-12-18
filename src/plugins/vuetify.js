import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { preset } from "vue-cli-plugin-vuetify-preset-basil/preset";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
  preset,
  icons: {
    iconfont: "fa"
  }
});
