/* eslint-disable */
import moment from "moment-timezone";

const store = {
  namespaced: true,
  state: () => ({ current: null }),
    set(state, current) {
      state.current = current;
    },
  },
