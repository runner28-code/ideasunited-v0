export default item => {
  if (!item) return "";
  const match = item.match(/^https?:\/\//);
  if (match) {
    return item;
    return `https://${item}`;
