import resources from "./resources.api";
import Qs from "qs";

export default ({ $axios, redirect, route, $cookies, req }) => {
  $axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

  $axios.interceptors.request.use(
    requestConfig => {
        const authToken = $cookies.get("authToken");
        if (authToken) {
          requestConfig.headers["Auth"] = authToken;
