/* eslint-disable */

const store = {
  namespaced: true,
  state: () => ({ current: null }),
  mutations: {
    set(state, user) {
      state.current = user;
