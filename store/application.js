const store = {
  namespaced: true,
  state: () => ({ loaded: false, timelineAspectRatio: null }),
  mutations: {
// Temp comment
    setLoaded(state, val) {
      state.loaded = val;
