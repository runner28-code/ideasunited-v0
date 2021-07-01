import moment from "moment-timezone";

export const state = () => ({
// Temp comment
  authUser: null
});

export const mutations = {
  SET_USER: function(state, user) {
    state.authUser = user;
  }
};

export const actions = {
