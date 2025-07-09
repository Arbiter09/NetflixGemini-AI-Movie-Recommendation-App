import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SearchTMDBMovie from "../utils/SearchTMDBMovie";
import Header from "./Header";
import { Star, Calendar, Users, Film, Globe, Clock } from "lucide-react";

const MoviePage = () => {
  const { movieName } = useParams();
  const [movieData, setMovieData] = useState(null);

  const getData = async () => {
    const data = await SearchTMDBMovie(movieName);
    setMovieData(data);
    console.log(movieData);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!movieData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const {
    backdrop_path,
    poster_path,
    title,
    original_title,
    overview,
    release_date,
    vote_average,
    vote_count,
    popularity,
    original_language,
    adult,
    video,
    genre_ids,
  } = movieData;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return "text-green-400";
    if (rating >= 6) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Backdrop Section */}
      <div className="relative">
        {backdrop_path && (
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
          </div>
        )}

        {/* Movie Details Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Poster */}
              {poster_path && (
                <div className="flex-shrink-0">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className="w-48 md:w-64 rounded-lg shadow-2xl border-4 border-white/20"
                  />
                </div>
              )}

              {/* Movie Info */}
              <div className="flex-1 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
                {original_title !== title && (
                  <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
                    Original: {original_title}
                  </h2>
                )}

                {/* Rating and Stats */}
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star
                      className={`w-6 h-6 ${getRatingColor(vote_average)}`}
                      fill="currentColor"
                    />
                    <span
                      className={`text-xl font-bold ${getRatingColor(
                        vote_average
                      )}`}
                    >
                      {vote_average.toFixed(1)}
                    </span>
                    <span className="text-gray-400">({vote_count} votes)</span>
                  </div>

                  {release_date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">
                        {formatDate(release_date)}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">
                      Popularity: {popularity.toFixed(0)}
                    </span>
                  </div>
                </div>

                {/* Overview */}
                {overview && (
                  <p className="text-gray-200 text-lg leading-relaxed mb-6 max-w-3xl">
                    {overview}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Movie Information Card */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Film className="w-5 h-5" />
              Movie Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Original Language:</span>
                <span className="text-white uppercase">
                  {original_language}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Release Date:</span>
                <span className="text-white">{formatDate(release_date)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Adult Content:</span>
                <span className="text-white">{adult ? "Yes" : "No"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Has Video:</span>
                <span className="text-white">{video ? "Yes" : "No"}</span>
              </div>
            </div>
          </div>

          {/* Rating Details Card */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Star className="w-5 h-5" />
              Rating Details
            </h3>
            <div className="space-y-4">
              <div className="text-center">
                <div
                  className={`text-4xl font-bold ${getRatingColor(
                    vote_average
                  )}`}
                >
                  {vote_average.toFixed(1)}
                </div>
                <div className="text-gray-400">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {vote_count}
                </div>
                <div className="text-gray-400">Total Votes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">
                  {popularity.toFixed(0)}
                </div>
                <div className="text-gray-400">Popularity Score</div>
              </div>
            </div>
          </div>

          {/* Genre Information Card */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Additional Info
            </h3>
            <div className="space-y-3">
              <div>
                <span className="text-gray-400">Genre IDs:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {genre_ids.map((id, index) => (
                    <span
                      key={index}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {id}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <span className="text-gray-400">Movie ID:</span>
                <span className="text-white ml-2">{movieData.id}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Overview Section */}
        {overview && (
          <div className="mt-12 bg-gray-800 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Synopsis</h3>
            <p className="text-gray-200 text-lg leading-relaxed">{overview}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
