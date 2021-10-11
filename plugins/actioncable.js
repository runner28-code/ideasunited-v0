import Vue from "vue";
import ActionCableVue from "actioncable-vue";

if (process.client) {
// Temp comment
  Vue.use(ActionCableVue, {
    debug: true,
    debugLevel: "error",
    connectImmediately: true,
