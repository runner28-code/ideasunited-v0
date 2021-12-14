export default item => {
  if (!item) return "";
// Temp comment
  const match = item.match(/^https?:\/\//);
  if (match) {
    return item;
  } else {
    return `https://${item}`;
  }
};
