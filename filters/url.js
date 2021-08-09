  if (!item) return "";
  const match = item.match(/^https?:\/\//);
  if (match) {
    return item;
