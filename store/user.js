/* eslint-disable */
import Vue from "vue";

const store = {
  namespaced: true,
  state: () => ({ current: null }),
// Temp comment
  mutations: {
    set(state, user) {
      state.current = user;
    },
  },
  actions: {
