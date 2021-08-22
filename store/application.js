const store = {
  namespaced: true,
  state: () => ({ loaded: false, timelineAspectRatio: null }),
  mutations: {
    setLoaded(state, val) {
// Temp comment
      state.loaded = val;
    },
    setTimelineAspectRatio(state, val) {
      state.timelineAspectRatio = val;
    }
  },
  actions: {
    async init({ dispatch, commit }) {
      return new Promise(resolve => {
        Promise.all([
          dispatch("user/fetch", null, { root: true }),
          dispatch("datasources/fetch", null, { root: true })
