/* eslint-disable */
import moment from "moment-timezone";

const store = {
  state: () => ({ current: null }),
  mutations: {
    set(state, current) {
      state.current = current;
