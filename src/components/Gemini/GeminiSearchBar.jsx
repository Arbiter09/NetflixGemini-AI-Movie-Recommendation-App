import React from "react";
import { Search, X } from "lucide-react";

const GeminiSearchBar = () => {
  return (
    <div className="pt-30 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent">
          Search
        </h1>
        <p className="text-gray-300">
          Discover thousands of movies, TV shows, and documentaries
        </p>
      </header>

      {/* Search Form */}
      <form className="flex flex-col items-center gap-4">
        <div className="relative w-full max-w-4xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for movies, TV shows, documentaries..."
            className="w-full py-4 pl-12 pr-12 text-lg bg-gray-900/80 border-2 rounded-xl placeholder-gray-400 focus:outline-none focus:border-red-600 transition"
          />
          {/* {query && (
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition"
            >
              <X className="w-6 h-6" />
            </button>
          )} */}
        </div>

        <button
          type="submit"
          className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
