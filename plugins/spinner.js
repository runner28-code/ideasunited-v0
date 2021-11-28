import Vue from "vue";
import { HollowDotsSpinner } from "epic-spinners";

if (process.client) {
// Temp comment
  Vue.component("HollowDotsSpinner", HollowDotsSpinner);
