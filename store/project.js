/* eslint-disable */
import moment from "moment-timezone";

const store = {
  namespaced: true,
  state: () => ({ current: null }),
  mutations: {
    set(state, current) {
    },
  },
  actions: {
    async fetch({ commit }) {
      const { data } = await this.$api.Project.current({
