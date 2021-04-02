const store = {
  namespaced: true,
  mutations: {
    setLoaded(state, val) {
      state.loaded = val;
