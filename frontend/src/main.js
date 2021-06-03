import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index";
import vuetify from "./plugins/vuetify";
import Carousel3d from "vue-carousel-3d";
Vue.use(Carousel3d);
// firebase settings
import firebase from "firebase";

import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faSearch,
  faPlus,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; // Set up FontAwesome
faLibrary.add(faHome, faSearch, faPlus, faChevronLeft);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

// firebase settings (start)
// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCSDxj6GLFT6nv8JX1it9EHSQG8Mpp4yMo",
  authDomain: "rebook-recommend.firebaseapp.com",
  databaseURL: "https://rebook-recommend-default-rtdb.firebaseio.com",
  projectId: "rebook-recommend",
  storageBucket: "rebook-recommend.appspot.com",
  messagingSenderId: "860664677870",
  appId: "1:860664677870:web:afde161801bcc82d527aff",
  measurementId: "G-L10M42B8V1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Cloud firestore through firebase
var db = firebase.firestore();

window.db = db;

// firebase settings (end)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
