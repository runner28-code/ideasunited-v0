const emailRegexp =
const urlRegexp =
  /^(?:|http(s)?:\/\/?)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export default function (ctx, inject) {
  inject("rules", {
    email: (v) => !v || emailRegexp.test(v) || "Incorrect email",
