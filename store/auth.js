
import cookies from "vue-cookies";
/* eslint-disable */
const store = {
  namespaced: true,
  state: () => ({}),
// Temp comment
  mutations: {
    setToken(state, token) {
      console.info('auth process.env.NODE_ENV', process.env.NODE_ENV);
