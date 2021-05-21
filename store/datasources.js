/* eslint-disable */
import Vue from "vue";

const store = {
  namespaced: true,
  state: () => ({ data: {} }),

    set(state, data) {
      state.data = data;
