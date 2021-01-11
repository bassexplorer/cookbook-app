import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
// import { preset } from "./cookbook-theme/preset";

import lightPreset from "./light-theme";
import darkPreset from "./dark-theme";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  // preset,
  icons: {
    iconfont: "fa"
  },
  theme: {
    defaults: "dark",
    themes: {
      light: {
        ...lightPreset
      },
      dark: {
        ...darkPreset
      }
    }
  }
});
