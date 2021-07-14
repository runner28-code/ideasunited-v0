/* eslint-disable */
import Vue from "vue";

const store = {
  namespaced: true,
  state: () => ({ current: null }),
  mutations: {
    set(state, user) {
      state.current = user;
    },
  },
  actions: {
    async fetch({ commit }) {
      const token = this.$cookies.get("authToken");

      if (token && process.client) {
        commit("set", data);
        const cookieDomain =
          process.env.NODE_ENV === "development"
            ? "localhost"
            : "." + window.location.hostname;
        var d = new Date();
        d.setDate(d.getDate() + 7);
