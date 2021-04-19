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
    async fetch({ commit }) {
