// src/utils/truncateTitle.js
function truncateTitle(title) {
  const maxLength = 20;
  return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
}

export default truncateTitle;
