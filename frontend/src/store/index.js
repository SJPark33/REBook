import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  state: { marketInfo: [] },
  mutations: {
    GET_MARKETINFO: function (state, info) {
      state.marketInfo = info;
    },
  },
  actions: {
    get_marketInfo: function (commit, info) {
      this.commit("GET_MARKETINFO", info);
    },
  },
  modules: {},
});
