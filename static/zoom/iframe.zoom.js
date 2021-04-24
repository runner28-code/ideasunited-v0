ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

const params = new URLSearchParams(window.location.search);

const meetingNumber = params.get("zoomId");
const passWord = params.get("zoomPassword") || "";
const userName = params.get("nickname") || "Guest";
