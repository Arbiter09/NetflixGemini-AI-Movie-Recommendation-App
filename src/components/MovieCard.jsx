import React from "react";
import { IMG_TMDB_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 mr-4">
      <img
        alt="movie poster"
        src={IMG_TMDB_CDN_URL + posterPath}
        className="rounded-2xl"
      />
    </div>
  );
};

export default MovieCard;
