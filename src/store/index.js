import Vue from "vue";
import Vuex from "vuex";
import { getToken, setToken } from "@/utils";
Vue.use(Vuex);

export default new Vuex.Store({
  //数据
  state: {
    user: getToken() || "",
    housesCode: "",
  },
  getters: {},
  mutations: {
    // 存储token
    setUser(state, payload) {
      state.user = payload;
      setToken(payload);
    },
    // 存储房屋id
    setHousesCode(state, payload) {
      state.housesCode = payload;
    },
  },
  actions: {},
  modules: {},
});
