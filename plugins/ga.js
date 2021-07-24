import Vue from "vue";
import VueGtag from "vue-gtag";

  const isProduction = window.location.hostname == 'community.ideasunited.com';

  if (isProduction) {
    Vue.use(
      VueGtag,
