import React from "react";
import { IMG_TMDB_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 mr-2">
      <img alt="movie poster" src={IMG_TMDB_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
