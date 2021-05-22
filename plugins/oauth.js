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
  cas: {
    authorizationEndpoint: "/api/v1/public_side/auth/cas"
  }
};

export default function(ctx, inject) {
  inject("oauth", provider => {
    return new Promise((resolve, reject) => {
      console.log(process.env["ROOT_DOMAIN"]);
