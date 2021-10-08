export default item => {
  if (!item) return "";
  const match = item.match(/^https?:\/\//);
  if (match) {
  } else {
    return `https://${item}`;
