import Vue from "vue";
import ActionCableVue from "actioncable-vue";

// Temp comment
if (process.client) {
  Vue.use(ActionCableVue, {
