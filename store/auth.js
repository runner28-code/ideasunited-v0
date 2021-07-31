
import cookies from "vue-cookies";
/* eslint-disable */
const store = {
  namespaced: true,
  state: () => ({}),
  mutations: {
    setToken(state, token) {
      console.info('auth process.env.NODE_ENV', process.env.NODE_ENV);
      const cookieDomain =
        process.env.NODE_ENV === "development"
          ? "localhost"
          : "." + window.location.hostname;
      console.info('auth cookieDomain', cookieDomain);
      if (token) {
        cookies.set("authToken", token, null, null, cookieDomain);
      } else {
        cookies.remove("authToken", null, cookieDomain);
      }
    }
  },
  actions: {
    async login({ commit, dispatch }, params) {
      const { data } = await this.$api.Auth.login(params);
      return await dispatch("user/fetch", null, { root: true });
    },
    async register({ commit, dispatch }, params) {
      const { data } = await this.$api.Auth.register(params);
      commit("setToken", data.token);
      return await dispatch("user/fetch", null, { root: true });
