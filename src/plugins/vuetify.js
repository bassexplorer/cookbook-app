import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { preset } from "vue-cli-plugin-vuetify-preset-basil/preset";
import lightPreset from "./light-theme";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  preset,
  icons: {
    iconfont: "fa"
  },
  theme: {
    defaults: "dark",
    themes: {
      light: {},
      dark: {
        ...lightPreset
      }
    }
  }
});
