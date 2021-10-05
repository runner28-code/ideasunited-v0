/* eslint-disable */
import moment from "moment-timezone";

const store = {
  namespaced: true,
  mutations: {
    set(state, current) {
      state.current = current;
    },
  },
  actions: {
    async fetch({ commit }) {
      const { data } = await this.$api.Project.current({
        host: window.location.host,
        root_path: window.location.pathname,
      });

      commit("set", data);

      return data;
    },
