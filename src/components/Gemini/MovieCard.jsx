import React from "react";
import { Star, Calendar, Globe } from "lucide-react";
import {
  formatDate,
  formatRating,
  getImageUrl,
} from "../../utils/utilityFunctions";
import { DEFAULT_MOVIE_POSTER } from "../../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title || movie.original_title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = DEFAULT_MOVIE_POSTER;
          }}
        />

        {/* Adult content indicator */}
        {movie.adult && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            18+
          </div>
        )}

        {/* Rating overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">
                {formatRating(movie.vote_average)}
              </span>
            </div>
            <div className="text-xs text-gray-300">
              {movie.vote_count} votes
            </div>
          </div>
        </div>
      </div>

      {/* Movie Details */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
          {movie.title || movie.original_title}
        </h3>

        <div className="space-y-2 text-xs text-gray-400">
          <div className="flex items-center space-x-2">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(movie.release_date)}</span>
          </div>

          {movie.original_language && (
            <div className="flex items-center space-x-2">
              <Globe className="w-3 h-3" />
              <span className="uppercase">{movie.original_language}</span>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <span className="text-yellow-400">★</span>
            <span>{movie.popularity?.toFixed(0)} popularity</span>
          </div>
        </div>

        {/* Overview */}
        {movie.overview && (
          <p className="text-gray-300 text-xs mt-3 line-clamp-3">
            {movie.overview}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
