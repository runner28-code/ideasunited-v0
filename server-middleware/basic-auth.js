import axios from "axios";
export default async function (req, res, next) {
  console.log("URL: ", req.url);
  const { host } = req.headers;
  // console.log(req.headers.referer);
  const protocol = host.match(/localhost\:\d+/) ? "http" : "https";
  try {
