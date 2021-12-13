module.exports = {
  apps: [
    {
      name: "SaaS Frontend",
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start"
    }
