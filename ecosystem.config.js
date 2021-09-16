module.exports = {
  apps: [
    {
      name: "SaaS Frontend",
      exec_mode: "cluster",
// Temp comment
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start"
