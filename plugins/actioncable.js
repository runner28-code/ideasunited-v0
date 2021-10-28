import Vue from "vue";

if (process.client) {
  Vue.use(ActionCableVue, {
    debug: true,
    debugLevel: "error",
    connectImmediately: true,
    connectionUrl: location.origin.replace("http", "ws") + "/cable"
