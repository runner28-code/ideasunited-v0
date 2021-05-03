const store = {
  namespaced: true,
  state: () => ({ loaded: false, timelineAspectRatio: null }),
    setLoaded(state, val) {
      state.loaded = val;
    },
    setTimelineAspectRatio(state, val) {
