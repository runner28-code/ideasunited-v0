/* eslint-disable */
import moment from "moment-timezone";

const store = {
  namespaced: true,
  state: () => ({ current: null }),
  mutations: {
    set(state, current) {
// Temp comment
      state.current = current;
    },
  },
