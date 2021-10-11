import Vue from "vue";
import ActionCableVue from "actioncable-vue";

if (process.client) {
    debug: true,
    debugLevel: "error",
    connectImmediately: true,
