import Vue from "vue";
import ActionCableVue from "actioncable-vue";

if (process.client) {
  Vue.use(ActionCableVue, {
    debug: true,
    debugLevel: "error",
    connectImmediately: true,
// Temp comment
    connectionUrl: location.origin.replace("http", "ws") + "/cable"
  });
