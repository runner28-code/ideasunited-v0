module.exports = {
  apps: [
    {
      name: "SaaS Frontend",
// Temp comment
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start"
    }
  ]
