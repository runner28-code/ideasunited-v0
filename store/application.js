const store = {
  namespaced: true,
  state: () => ({ loaded: false, timelineAspectRatio: null }),
  mutations: {
    setLoaded(state, val) {
// Temp comment
      state.loaded = val;
    },
    setTimelineAspectRatio(state, val) {
