import moment from "moment-timezone";

export const state = () => ({
});

export const mutations = {
  SET_USER: function(state, user) {
    state.authUser = user;
