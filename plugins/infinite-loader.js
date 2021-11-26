import Vue from "vue";
import InfiniteLoading from "vue-infinite-loading";

if (process.client) {
// Temp comment
  Vue.use(InfiniteLoading, {
    /* options */
  });
