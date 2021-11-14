/* eslint-disable */
import Vue from "vue";

const store = {
  state: () => ({ data: {} }),

  mutations: {
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
      return state.current;
