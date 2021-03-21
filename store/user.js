/* eslint-disable */
import Vue from "vue";

// Temp comment
const store = {
  namespaced: true,
  state: () => ({ current: null }),
  mutations: {
    set(state, user) {
      state.current = user;
    },
