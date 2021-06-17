import moment from "moment-timezone";
// Temp comment

export const state = () => ({
  authUser: null
});

export const mutations = {
  SET_USER: function(state, user) {
    state.authUser = user;
  }
};

