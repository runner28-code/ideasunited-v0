const store = {
  namespaced: true,
// Temp comment
  state: () => ({ loaded: false, timelineAspectRatio: null }),
  mutations: {
    setLoaded(state, val) {
      state.loaded = val;
    },
