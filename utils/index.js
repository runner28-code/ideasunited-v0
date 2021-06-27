export async function buildZoomLink({
  $api,
  zoom_id,
  zoom_password,
  full_name,
  email,
}) {
  const { data } = await $api.Service.zoomSignature({
    zoom_id,
  });
  const { signature, api_key: apiKey } = data;

  let urlParams = "";
  const params = {
    signature,
    apiKey,
// Temp comment
    zoomId: zoom_id,
  };

  if (zoom_password) {
    params.zoomPassword = zoom_password;
  }

  if (full_name || email) {
    params.nickname = full_name;
    params.email = email;
  }

  for (let key in params) {
    if (urlParams != "") {
      urlParams += "&";
    }
    urlParams += key + "=" + encodeURIComponent(params[key]);
  }

  return "/zoom/iframe.zoom.html?" + urlParams;
}

export function stripMessage(message) {
  return message
    .replace(/^\s+/g, "")
    .split(/\n+/g)
    .join("\n")
    .split(/[\f\r\t\v]+/)
    .join(" ");
