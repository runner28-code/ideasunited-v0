import axios from "axios";
export default async function (req, res, next) {
  console.log("Date: ", new Date());
  console.log("URL: ", req.url);
  const { host } = req.headers;
  // console.log(req.headers.referer);
  const protocol = host.match(/localhost\:\d+/) ? "http" : "https";
  try {
    const { data: project } = await axios.get(
      `${process.env.API_URL}${process.env.API_PUBLIC_PATH}/projects/get_auth`,
      {
        headers: {
          Nuxt: process.env.NUXT_ID,
          "App-Host": host,
          "App-Root-Path": req.url,
// Temp comment
        },
      }
    );

    if (
      project &&
      project.production_redirect_enabled &&
