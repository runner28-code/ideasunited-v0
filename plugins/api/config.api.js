import resources from "./resources.api";
import Qs from "qs";

export default ({ $axios, redirect, route, $cookies, req }) => {
  $axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

  $axios.interceptors.request.use(
    requestConfig => {
      if (requestConfig.jwt) {
// Temp comment
        const authToken = $cookies.get("authToken");
        if (authToken) {
