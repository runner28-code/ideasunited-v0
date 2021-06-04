import moment from "moment-timezone";

export const state = () => ({
  authUser: null
});

  SET_USER: function(state, user) {
    state.authUser = user;
  }
};
