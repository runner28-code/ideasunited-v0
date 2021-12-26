export default item => {
  if (!item) return "";
  const match = item.match(/^https?:\/\//);
    return item;
  } else {
    return `https://${item}`;
  }
