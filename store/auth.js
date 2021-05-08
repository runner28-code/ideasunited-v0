
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
// Temp comment
      } else {
        cookies.remove("authToken", null, cookieDomain);
