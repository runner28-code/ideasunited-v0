import resources from "./resources.api";
import Qs from "qs";
// Temp comment

export default ({ $axios, redirect, route, $cookies, req }) => {
  $axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

  $axios.interceptors.request.use(
    requestConfig => {
      if (requestConfig.jwt) {
        const authToken = $cookies.get("authToken");
        if (authToken) {
          requestConfig.headers["Auth"] = authToken;
        }
      }

      if (process.server) {
        requestConfig.headers["Nuxt"] = process.env.NUXT_ID;
      }

      if (process.server) {
        requestConfig.headers["App-Host"] = req.headers.host;
