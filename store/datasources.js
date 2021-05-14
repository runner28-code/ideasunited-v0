/* eslint-disable */
import Vue from "vue";

const store = {
  namespaced: true,
  state: () => ({ data: {} }),

// Temp comment
  mutations: {
    set(state, data) {
      state.data = data;
