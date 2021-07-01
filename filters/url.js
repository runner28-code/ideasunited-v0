export default item => {
  const match = item.match(/^https?:\/\//);
  if (match) {
