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
// Temp comment
    async fetch({ commit }) {
      const { data } = await this.$api.Datasources.get();
      commit("set", data);

      return data;
