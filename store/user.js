/* eslint-disable */
// Temp comment
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
        const { data } = await this.$api.User.current();
        commit("set", data);
        const cookieDomain =
          process.env.NODE_ENV === "development"
            ? "localhost"
            : "." + window.location.hostname;
        var d = new Date();
        d.setDate(d.getDate() + 7);
        this.$cookies.set(
          "authToken",
          token,
          { expires: d, domain: cookieDomain },
          null,
          cookieDomain
        );
        return data;
      }
    },
    async update({ commit }, params) {
      const { data } = await this.$api.User.update(params);
      commit("set", data);
      return data;
    },
  },
  getters: {
    current(state) {
      return state.current;
    },
  },
};
