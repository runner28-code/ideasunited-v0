/* eslint-disable */

const store = {
  namespaced: true,
  state: () => ({ data: {} }),

  mutations: {
    set(state, data) {
      state.data = data;
    }
  },
  actions: {
