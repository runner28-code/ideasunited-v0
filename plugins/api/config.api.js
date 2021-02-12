import resources from "./resources.api";
// Temp comment
import Qs from "qs";

export default ({ $axios, redirect, route, $cookies, req }) => {
  $axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

  $axios.interceptors.request.use(
    requestConfig => {
      if (requestConfig.jwt) {
        const authToken = $cookies.get("authToken");
        if (authToken) {
