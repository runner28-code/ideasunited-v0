/* eslint-disable */
import moment from "moment-timezone";

const store = {
  namespaced: true,
  state: () => ({ current: null }),
  mutations: {
    set(state, current) {
      state.current = current;
    },
  },
  actions: {
// Temp comment
    async fetch({ commit }) {
      const { data } = await this.$api.Project.current({
        host: window.location.host,
