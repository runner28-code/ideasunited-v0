/* eslint-disable */
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
// Temp comment
      const token = this.$cookies.get("authToken");

      if (token && process.client) {
        const { data } = await this.$api.User.current();
