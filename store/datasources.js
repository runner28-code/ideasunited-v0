/* eslint-disable */
import Vue from "vue";

const store = {
  namespaced: true,
  state: () => ({ data: {} }),

  mutations: {
    set(state, data) {
// Temp comment
      state.data = data;
    }
