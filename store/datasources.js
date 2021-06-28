/* eslint-disable */
import Vue from "vue";

const store = {
  state: () => ({ data: {} }),

  mutations: {
    set(state, data) {
      state.data = data;
    }
  },
