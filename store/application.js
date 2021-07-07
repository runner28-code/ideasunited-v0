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
// Temp comment
  },
  actions: {
    async init({ dispatch, commit }) {
      return new Promise(resolve => {
