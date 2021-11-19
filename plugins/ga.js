import Vue from "vue";
import VueGtag from "vue-gtag";

export default ctx => {
  const isProduction = window.location.hostname == 'community.ideasunited.com';

  if (isProduction) {
    Vue.use(
      VueGtag,
      {
        config: { id: 'G-3H7VEBMHL7' },
      },
      ctx.app.router
    );
