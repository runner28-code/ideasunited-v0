import axios from "axios";
export default async function (req, res, next) {
  console.log("Date: ", new Date());
  console.log("URL: ", req.url);
  const { host } = req.headers;
  // console.log(req.headers.referer);
  const protocol = host.match(/localhost\:\d+/) ? "http" : "https";
  try {
    const { data: project } = await axios.get(
      {
        headers: {
          Nuxt: process.env.NUXT_ID,
          "App-Host": host,
          "App-Root-Path": req.url,
        },
      }
    );

    if (
      project &&
      project.production_redirect_enabled &&
      project.production_redirect_url
    ) {
      console.log("Redirect");
      res.writeHead(302, { Location: project.production_redirect_url });
