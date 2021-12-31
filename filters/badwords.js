import badwords from "./badwords/filter";

export default value => {
  return badwords.clean(value);
};
