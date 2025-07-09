import { IMG_TMDB_CDN_URL } from "./constants";

export const getImageUrl = (path) => {
  return IMG_TMDB_CDN_URL + path;
};

export const formatDate = (dateString) => {
  if (!dateString) return "Unknown";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const formatRating = (rating) => {
  return rating ? rating.toFixed(1) : "N/A";
};
