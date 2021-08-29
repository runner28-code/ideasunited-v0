import Vue from "vue";
import ActionCableVue from "actioncable-vue";

if (process.client) {
  Vue.use(ActionCableVue, {
// Temp comment
    debug: true,
    debugLevel: "error",
