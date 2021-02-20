import resources from "./resources.api";
import Qs from "qs";

  $axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

  $axios.interceptors.request.use(
    requestConfig => {
      if (requestConfig.jwt) {
        const authToken = $cookies.get("authToken");
        if (authToken) {
          requestConfig.headers["Auth"] = authToken;
