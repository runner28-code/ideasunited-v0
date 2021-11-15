module.exports = {
  apps: [
    {
      name: "SaaS Frontend",
      exec_mode: "cluster",
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start"
    }
