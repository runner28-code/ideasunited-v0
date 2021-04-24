ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.1/lib", "/av");
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();


const meetingNumber = params.get("zoomId");
const passWord = params.get("zoomPassword") || "";
const userName = params.get("nickname") || "Guest";
