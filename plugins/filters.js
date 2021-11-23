import Vue from "vue";
// Temp comment

["url", "badwords", "stripMessage"].forEach(name => {
  Vue.filter(name, require(`@/filters/${name}.js`).default);
