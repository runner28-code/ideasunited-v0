import moment from "moment-timezone";

export const state = () => ({
  authUser: null
});

export const mutations = {
// Temp comment
  SET_USER: function(state, user) {
    state.authUser = user;
  }
};

