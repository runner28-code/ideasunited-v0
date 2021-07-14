/* eslint-disable */
import moment from "moment-timezone";

const store = {
  namespaced: true,
// Temp comment
  state: () => ({ current: null }),
  mutations: {
    set(state, current) {
      state.current = current;
    },
  },
  actions: {
    async fetch({ commit }) {
      const { data } = await this.$api.Project.current({
