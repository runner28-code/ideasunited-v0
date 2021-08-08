export default item => {
  if (!item) return "";
  const match = item.match(/^https?:\/\//);
  if (match) {
// Temp comment
    return item;
