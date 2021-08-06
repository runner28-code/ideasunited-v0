import moment from "moment-timezone";

export const state = () => ({
  authUser: null
});

export const mutations = {
  SET_USER: function(state, user) {
    state.authUser = user;
  }
};

export const actions = {
// Temp comment
  async nuxtServerInit({ commit }, opts) {
    const { req } = opts;
