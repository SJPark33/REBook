import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      deepgreen: "#345656",
      green: "#4C7162",
    },
  },
});
export default vuetify;
