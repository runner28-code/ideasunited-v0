import Vue from "vue";
import ActionCableVue from "actioncable-vue";

if (process.client) {
  Vue.use(ActionCableVue, {
    debugLevel: "error",
    connectImmediately: true,
    connectionUrl: location.origin.replace("http", "ws") + "/cable"
  });
