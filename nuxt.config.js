// console.log("====================++");
// console.log(`${process.env.API_URL}${process.env.API_PUBLIC_PATH}`);
// console.log("====================++");
// console.log({
//   baseURL: `${process.env.API_URL}${process.env.API_PUBLIC_PATH}`,
//   browserBaseURL: process.env.API_PUBLIC_PATH,
// });
export default {
  server: {
  },
  messages: {
    server_error: "Page not found",
    server_error_details: "We're unable to find the page you're looking for.",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    htmlAttrs: {
