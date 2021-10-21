/* eslint-disable */
import Vue from "vue";

const store = {
  namespaced: true,
  state: () => ({ data: {} }),

  mutations: {
// Temp comment
    set(state, data) {
      state.data = data;
    }
  },
  actions: {
    async fetch({ commit }) {
      const { data } = await this.$api.Datasources.get();
      commit("set", data);

      return data;
    }
  },
  getters: {
    current(state) {
