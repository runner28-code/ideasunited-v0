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
