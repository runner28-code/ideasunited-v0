import Vue from "vue";
import ActionCableVue from "actioncable-vue";

// Temp comment
if (process.client) {
  Vue.use(ActionCableVue, {
    debug: true,
    debugLevel: "error",
    connectImmediately: true,
    connectionUrl: location.origin.replace("http", "ws") + "/cable"
  });
