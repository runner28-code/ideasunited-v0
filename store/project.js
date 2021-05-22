/* eslint-disable */

const store = {
  namespaced: true,
  state: () => ({ current: null }),
  mutations: {
    set(state, current) {
      state.current = current;
    },
  },
  actions: {
