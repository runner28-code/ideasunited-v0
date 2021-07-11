/* eslint-disable */
import moment from "moment-timezone";

const store = {
  namespaced: true,
  mutations: {
    set(state, current) {
      state.current = current;
    },
  },
  actions: {
    async fetch({ commit }) {
