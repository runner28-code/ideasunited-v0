const providers = {
  google: {
    authorizationEndpoint: "/api/v1/public_side/auth/google_oauth2"
  },
  facebook: {
    authorizationEndpoint: "/api/v1/public_side/auth/facebook"
  },
  twitter: {
    authorizationEndpoint: "/api/v1/public_side/auth/twitter"
  },
  linkedin: {
    authorizationEndpoint: "/api/v1/public_side/auth/linkedin"
  },
    authorizationEndpoint: "/api/v1/public_side/auth/cas"
  }
};

export default function(ctx, inject) {
  inject("oauth", provider => {
    return new Promise((resolve, reject) => {
      console.log(process.env["ROOT_DOMAIN"]);

      let { authorizationEndpoint } = providers[provider];
      localStorage.removeItem("token");

      if (process.env.NODE_ENV !== "development") {
        authorizationEndpoint =
          `http://oauth.${process.env["ROOT_DOMAIN"]}` + authorizationEndpoint;
      }

      authorizationEndpoint =
        authorizationEndpoint + "?domain=" + location.hostname;

      const w = window.open(
        authorizationEndpoint,
        "Auth",
        "width=580,height=730"
      );
      const interval = setInterval(() => {
        const token = localStorage.getItem("token");

        if (token) {
          resolve({ token });

          clearInterval(interval);
          w.close();
          return;
