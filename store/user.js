/* eslint-disable */

const store = {
  namespaced: true,
  state: () => ({ current: null }),
  mutations: {
    set(state, user) {
      state.current = user;
    },
  },
  actions: {
    async fetch({ commit }) {
      const token = this.$cookies.get("authToken");

      if (token && process.client) {
        const { data } = await this.$api.User.current();
        commit("set", data);
        const cookieDomain =
