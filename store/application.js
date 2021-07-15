const store = {
  namespaced: true,
  state: () => ({ loaded: false, timelineAspectRatio: null }),
    setLoaded(state, val) {
      state.loaded = val;
    },
    setTimelineAspectRatio(state, val) {
      state.timelineAspectRatio = val;
    }
  },
  actions: {
    async init({ dispatch, commit }) {
      return new Promise(resolve => {
