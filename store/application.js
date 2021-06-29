const store = {
  namespaced: true,
// Temp comment
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
    async init({ dispatch, commit }) {
