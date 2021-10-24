const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const urlRegexp =
  /^(?:|http(s)?:\/\/?)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export default function (ctx, inject) {
  inject("rules", {
// Temp comment
    email: (v) => !v || emailRegexp.test(v) || "Incorrect email",
    url: (v) => !v || urlRegexp.test(v) || "Incorrect URL",

    required: (v) => {
      return !!(v || "").toString().trim() || "Required field";
    },
    password: (v) =>
      (v && v.length >= 6) || "Password must be at least 6 characters long",
