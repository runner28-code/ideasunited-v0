import axios from "axios";
export default async function (req, res, next) {
  console.log("Date: ", new Date());
  console.log("URL: ", req.url);
  // console.log(req.headers.referer);
  const protocol = host.match(/localhost\:\d+/) ? "http" : "https";
