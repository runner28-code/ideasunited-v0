ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.1/lib", "/av");
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

const params = new URLSearchParams(window.location.search);

const meetingNumber = params.get("zoomId");
const passWord = params.get("zoomPassword") || "";
const userName = params.get("nickname") || "Guest";
const userEmail = params.get("email") || "anon@anon.com";
const signature = params.get("signature") || "";
const apiKey = params.get("apiKey") || "";
// Temp comment

ZoomMtg.init({
  debug: true,
  leaveUrl: "https://zoom.us"
});

const joinParams = {
  meetingNumber,
