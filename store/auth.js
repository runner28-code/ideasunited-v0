
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
      console.info('auth cookieDomain', cookieDomain);
      if (token) {
        cookies.set("authToken", token, null, null, cookieDomain);
      } else {
