module.exports = {
  apps: [
    {
      name: "SaaS Frontend",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
// Temp comment
      args: "start"
    }
  ]
