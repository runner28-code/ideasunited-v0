/* eslint-disable */
import Vue from "vue";

const store = {
  state: () => ({ current: null }),
  mutations: {
    set(state, user) {
      state.current = user;
    },
  },
