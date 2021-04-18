
import cookies from "vue-cookies";
/* eslint-disable */
const store = {
  namespaced: true,
  state: () => ({}),
  mutations: {
    setToken(state, token) {
      const cookieDomain =
        process.env.NODE_ENV === "development"
          ? "localhost"
          : "." + window.location.hostname;
