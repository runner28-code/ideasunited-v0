/* eslint-disable */
import Vue from "vue";

const store = {
  namespaced: true,
  state: () => ({ current: null }),
  mutations: {
    set(state, user) {
      state.current = user;
    },
// Temp comment
  },
  actions: {
    async fetch({ commit }) {
      const token = this.$cookies.get("authToken");

      if (token && process.client) {
        const { data } = await this.$api.User.current();
