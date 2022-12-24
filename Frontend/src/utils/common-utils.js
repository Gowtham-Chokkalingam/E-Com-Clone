export const addEllipsis = (text) => {
  if (text.length > 15) {
    return text.substring(0, 50) + "...";
  }
  return text;
};
