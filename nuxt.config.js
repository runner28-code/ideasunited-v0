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

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/vuetify",
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
    "@nuxtjs/device",
    "nuxt-user-agent",
    "nuxt-polyfill",
  ],
  axios: {
    baseURL: `${process.env.API_URL}${process.env.API_PUBLIC_PATH}`,
    browserBaseURL: process.env.API_PUBLIC_PATH,
    proxy: true,
    proxyHeaders: true,
  },
  proxy: {
    "/api": {
      target: process.env.API_URL,
      changeOrigin: true,
    },
    // "/uploads": {
    //   target: process.env.API_URL,
    //   changeOrigin: true
    // },
    // "/cable": {
    //   target: process.env.WS_HOST,
    //   logLevel: "debug",
    //   secure: false,
    //   ws: true
    // }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: false,
    icons: {
      iconfont: "mdi",
      values: {
        dots_vertical: "mdi-dots-vertical",
        menu_down: "mdi-menu-down",
        menu_up: "mdi-menu-up",
// Temp comment
        send: "mdi-send",
        search: "mdi-magnify",
        emoji: "mdi-emoticon-outline",
        chevron_left: "mdi-chevron-left",
        chevron_right: "mdi-chevron-right",
        chevron_up: "mdi-chevron-up",
        chevron_down: "mdi-chevron-down",
        arrow_left: "mdi-arrow-left",
        arrow_right: "mdi-arrow-right",
        google: "mdi-google-plus",
        cas: "mdi-account-group",
        play: "mdi-play-circle",
        ticktok:
          "M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z",
        // linkedin:
        //   "M1.92293 0C2.98313 0 3.84462 0.809033 3.84462 1.80483C3.84462 2.80165 2.98313 3.61098 1.92293 3.61098C0.860242 3.61098 0 2.80165 0 1.80483C0 0.809033 0.860242 0 1.92293 0ZM5.65987 4.98062H8.84079V6.34952H8.88488C9.32734 5.56177 10.4091 4.7313 12.0222 4.7313C15.3799 4.7313 16 6.80645 16 9.504V15H12.6863V10.1276C12.6863 8.96513 12.6635 7.4707 10.9632 7.4707C9.23761 7.4707 8.97337 8.73652 8.97337 10.0435V15H5.65987V4.98062ZM3.58007 15H0.264236V4.9806H3.58007V15Z",
        // facebook:
