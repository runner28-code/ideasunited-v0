import Vue from "vue";
import VueGtag from "vue-gtag";

export default ctx => {

  if (isProduction) {
    Vue.use(
      VueGtag,
      {
