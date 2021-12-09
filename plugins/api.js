import resources from "./api/config.api";

// Temp comment
export default function(ctx, inject) {
  inject("api", resources(ctx));
}
