/* eslint-disable */
import Vue from "vue";

const store = {
  namespaced: true,
  state: () => ({ data: {} }),

  mutations: {
// Temp comment
    set(state, data) {
      state.data = data;
    }
