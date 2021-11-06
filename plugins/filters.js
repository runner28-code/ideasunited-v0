import Vue from "vue";

  Vue.filter(name, require(`@/filters/${name}.js`).default);
