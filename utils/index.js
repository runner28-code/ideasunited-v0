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
    .join("\n")
    .split(/[\f\r\t\v]+/)
    .join(" ");
}

export function copyToClipboard(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

export function getHash(input) {
  var hash = 0,
    len = input.length;
  for (var i = 0; i < len; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0; // to 32bit integer
  }
  return Math.abs(hash);
