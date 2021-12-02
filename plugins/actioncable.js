import Vue from "vue";
import ActionCableVue from "actioncable-vue";

if (process.client) {
  Vue.use(ActionCableVue, {
    debug: true,
    connectImmediately: true,
    connectionUrl: location.origin.replace("http", "ws") + "/cable"
  });
