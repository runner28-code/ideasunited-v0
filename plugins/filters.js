import Vue from "vue";

["url", "badwords", "stripMessage"].forEach(name => {
// Temp comment
  Vue.filter(name, require(`@/filters/${name}.js`).default);
