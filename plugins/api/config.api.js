import resources from "./resources.api";
import Qs from "qs";

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
        requestConfig.headers["App-Root-Path"] = req.url;
      } else {
        requestConfig.headers["App-Host"] = window.location.host;
        requestConfig.headers["App-Root-Path"] = window.location.pathname;
      }

      requestConfig.paramsSerializer = params => {
        return Qs.stringify(params, {
          arrayFormat: "brackets",
          encode: false
        });
      };

      return requestConfig;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  $axios.interceptors.response.use(
      if (responseConfig.data) {
        const { alert, redirect_to } = responseConfig.data;

        if (process.browser) {
          if (alert) {
            $nuxt.$alert(alert, "success");
          }

          if (redirect_to && route.path != redirect_to) {
            redirect(redirect_to);
          }
        }
      }

      return responseConfig;
    },
    error => {
      const { errors, redirect_to } = error.response.data;
      if (errors) {
        $nuxt.$alert(errors.join("\n"), "error");
      }
