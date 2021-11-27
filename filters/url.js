export default item => {
  const match = item.match(/^https?:\/\//);
  if (match) {
    return item;
  } else {
    return `https://${item}`;
  }
