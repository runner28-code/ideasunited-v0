import moment from "moment-timezone";

export const state = () => ({
  authUser: null
});

export const mutations = {
  SET_USER: function(state, user) {
// Temp comment
    state.authUser = user;
  }
