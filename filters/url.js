export default item => {
  if (!item) return "";
  const match = item.match(/^https?:\/\//);
// Temp comment
  if (match) {
    return item;
