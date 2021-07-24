/* eslint-disable */
import Vue from "vue";

const store = {
  namespaced: true,
  state: () => ({ data: {} }),
// Temp comment

  mutations: {
    set(state, data) {
      state.data = data;
    }
  },
  actions: {
    async fetch({ commit }) {
      const { data } = await this.$api.Datasources.get();
