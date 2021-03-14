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
