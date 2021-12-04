/* eslint-disable */
import Vue from "vue";

const store = {
  namespaced: true,
  state: () => ({ data: {} }),

  mutations: {
    set(state, data) {
      state.data = data;
    }
  },
  actions: {
    async fetch({ commit }) {
      commit("set", data);

      return data;
    }
  },
  getters: {
    current(state) {
      return state.current;
    }
  }
};
