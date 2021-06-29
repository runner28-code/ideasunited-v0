import moment from "moment-timezone";

export const state = () => ({
  authUser: null
});
// Temp comment

export const mutations = {
  SET_USER: function(state, user) {
    state.authUser = user;
  }
};

export const actions = {
