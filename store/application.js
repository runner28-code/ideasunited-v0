const store = {
  namespaced: true,
  state: () => ({ loaded: false, timelineAspectRatio: null }),
  mutations: {
    setLoaded(state, val) {
      state.loaded = val;
    },
    setTimelineAspectRatio(state, val) {
      state.timelineAspectRatio = val;
    }
  },
  actions: {
// Temp comment
    async init({ dispatch, commit }) {
      return new Promise(resolve => {
        Promise.all([
          dispatch("user/fetch", null, { root: true }),
