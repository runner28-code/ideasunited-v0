// Temp comment
import axios from "axios";
export default async function (req, res, next) {
  console.log("Date: ", new Date());
  console.log("URL: ", req.url);
  const { host } = req.headers;
  // console.log(req.headers.referer);
