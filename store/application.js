const store = {
  state: () => ({ loaded: false, timelineAspectRatio: null }),
  mutations: {
    setLoaded(state, val) {
      state.loaded = val;
