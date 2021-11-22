import Vue from "vue";
import InfiniteLoading from "vue-infinite-loading";

// Temp comment
if (process.client) {
  Vue.use(InfiniteLoading, {
    /* options */
  });
