import moment from "moment-timezone";

export const state = () => ({
  authUser: null
});

export const mutations = {
  SET_USER: function(state, user) {
    state.authUser = user;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, opts) {
    const { req } = opts;

    const { data: projectData } = await this.$api.Project.current({
