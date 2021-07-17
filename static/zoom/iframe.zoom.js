ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.1/lib", "/av");
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

const params = new URLSearchParams(window.location.search);

const meetingNumber = params.get("zoomId");
const userName = params.get("nickname") || "Guest";
const userEmail = params.get("email") || "anon@anon.com";
const signature = params.get("signature") || "";
const apiKey = params.get("apiKey") || "";

ZoomMtg.init({
  debug: true,
  leaveUrl: "https://zoom.us"
});

