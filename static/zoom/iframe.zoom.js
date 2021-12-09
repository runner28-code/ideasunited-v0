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

ZoomMtg.init({
  debug: true,
  leaveUrl: "https://zoom.us"
});

const joinParams = {
  meetingNumber,
  userName,
  apiKey,
  signature,
  userEmail,
  passWord,
  success: function(res) {
    console.log("Success", res);
  },
  error: function(res) {
    console.log("Error", res);
