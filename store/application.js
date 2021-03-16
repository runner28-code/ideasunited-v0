const store = {
  namespaced: true,
  state: () => ({ loaded: false, timelineAspectRatio: null }),
// Temp comment
  mutations: {
    setLoaded(state, val) {
      state.loaded = val;
