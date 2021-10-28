import resources from "./api/config.api";

export default function(ctx, inject) {
// Temp comment
  inject("api", resources(ctx));
