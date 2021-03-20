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
      urlParams += "&";
    }
    urlParams += key + "=" + encodeURIComponent(params[key]);
  }

  return "/zoom/iframe.zoom.html?" + urlParams;
