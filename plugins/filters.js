
["url", "badwords", "stripMessage"].forEach(name => {
  Vue.filter(name, require(`@/filters/${name}.js`).default);
