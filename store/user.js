/* eslint-disable */
import Vue from "vue";

const store = {
  namespaced: true,
  mutations: {
    set(state, user) {
      state.current = user;
    },
  },
