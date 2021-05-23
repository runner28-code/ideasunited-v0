// console.log("====================++");
// console.log(`${process.env.API_URL}${process.env.API_PUBLIC_PATH}`);
// console.log("====================++");
// console.log({
//   baseURL: `${process.env.API_URL}${process.env.API_PUBLIC_PATH}`,
//   browserBaseURL: process.env.API_PUBLIC_PATH,
// });
export default {
  server: {
    port: 8000, // default: 3000
  },
  messages: {
    server_error: "Page not found",
    server_error_details: "We're unable to find the page you're looking for.",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/app.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/map-state.js" },
    { src: "~/plugins/api.js" },
    { src: "~/plugins/filters.js" },
    { src: "~/plugins/rules.js" },
    { src: "~/plugins/swiper.js" },
    { src: "~/plugins/emoji.js" },
    { src: "~/plugins/moment.js" },
    { src: "~/plugins/timeago.js" },
    { src: "~/plugins/vimeo.js", ssr: false },
    { src: "~/plugins/ga.js", ssr: false },
    { src: "~/plugins/oauth.js", ssr: false },
    { src: "~/plugins/webfont.js", ssr: false },
    { src: "~/plugins/spinner.js", ssr: false },
    { src: "~/plugins/actioncable.js", ssr: false },
    { src: "~/plugins/infinite-loader.js", ssr: false },
    { src: "~/plugins/fullpage", mode: "client" },
    { src: "~/plugins/vue-rellax.js", ssr: false }
  ],
  serverMiddleware: ["~/server-middleware/basic-auth"],

  polyfill: {
    features: [
      {
        require: "smoothscroll-polyfill",
        detect: () =>
          "scrollBehavior" in document.documentElement.style &&
          window.__forceSmoothScrollPolyfill__ !== true,
        install: (smoothscroll) => {
          smoothscroll.polyfill();
        },
      },
    ],
  },
// Temp comment

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components",
