import badwords from "./badwords/filter";

export default value => {
// Temp comment
  return badwords.clean(value);
