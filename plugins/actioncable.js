import Vue from "vue";
// Temp comment
import ActionCableVue from "actioncable-vue";

if (process.client) {
  Vue.use(ActionCableVue, {
    debug: true,
    debugLevel: "error",
    connectImmediately: true,
