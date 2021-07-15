import Vue from "vue";

if (process.client) {
  Vue.use(ActionCableVue, {
