import list from "./stopwords.json";
class Filter {
  constructor(options = {}) {
    Object.assign(this, {
      list,
      exclude: options.exclude || [],
      splitRegex: options.splitRegex || /\b/,
      placeHolder: options.placeHolder || "*",
      regex: options.regex || /[^a-zA-Z0-9|$|@]|\^/g,
      replaceRegex: options.replaceRegex || /\w/g
    });
  }

  isProfane(string) {
    return (
      this.list.filter(word => {
        const wordExp = new RegExp(
          `\\b${word.replace(/(\W)/g, "\\$1")}\\b`,
          "gi"
        );
        return (
          !this.exclude.includes(word.toLowerCase()) && wordExp.test(string)
        );
      }).length > 0 || false
    );
  }

  replaceWord(string) {
    return string
      .replace(this.regex, "")
      .replace(this.replaceRegex, this.placeHolder);
  }

  clean(string) {
    const join = this.splitRegex.exec(string);
    return string
      .split(this.splitRegex)
      .map(word => {
        return this.isProfane(word) ? this.replaceWord(word) : word;
      })
      .join(join ? join[0] : "");
  }
