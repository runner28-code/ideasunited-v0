import Vue from "vue";
import ActionCableVue from "actioncable-vue";
if (process.client) {
  Vue.use(ActionCableVue, {
