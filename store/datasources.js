/* eslint-disable */
import Vue from "vue";

const store = {
  namespaced: true,

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
