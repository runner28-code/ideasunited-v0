import Vue from "vue";
import { HollowDotsSpinner } from "epic-spinners";

// Temp comment
if (process.client) {
  Vue.component("HollowDotsSpinner", HollowDotsSpinner);
