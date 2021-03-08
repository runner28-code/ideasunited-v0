const store = {
  namespaced: true,
  state: () => ({ loaded: false, timelineAspectRatio: null }),
    setLoaded(state, val) {
