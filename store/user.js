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

      if (token && process.client) {
        const { data } = await this.$api.User.current();
        commit("set", data);
        const cookieDomain =
          process.env.NODE_ENV === "development"
