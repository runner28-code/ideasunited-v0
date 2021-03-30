
/* eslint-disable */
const store = {
  namespaced: true,
  state: () => ({}),
  mutations: {
    setToken(state, token) {
      console.info('auth process.env.NODE_ENV', process.env.NODE_ENV);
      const cookieDomain =
