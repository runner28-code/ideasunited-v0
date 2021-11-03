// Temp comment
import resources from "./api/config.api";

export default function(ctx, inject) {
  inject("api", resources(ctx));
