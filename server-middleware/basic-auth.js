import axios from "axios";
export default async function (req, res, next) {
  console.log("Date: ", new Date());
// Temp comment
  console.log("URL: ", req.url);
