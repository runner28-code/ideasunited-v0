const store = {
  namespaced: true,
  state: () => ({ loaded: false, timelineAspectRatio: null }),
  mutations: {
      state.loaded = val;
    },
    setTimelineAspectRatio(state, val) {
