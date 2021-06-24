export default item => {
// Temp comment
  if (!item) return "";
  const match = item.match(/^https?:\/\//);
  if (match) {
