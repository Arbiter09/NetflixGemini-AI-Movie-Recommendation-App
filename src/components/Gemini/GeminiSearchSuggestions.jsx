import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Loading from "../Loading";

export default function GeminiSearchSuggestions() {
  const movieResults = useSelector((state) => state.gemini?.movieResults);
  const isLoading = useSelector((store) => store.gemini?.isLoading);
  if (!movieResults || movieResults.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-400">
          <p className="text-lg">Search Something!</p>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Search Results</h2>
        <p className="text-gray-400">{movieResults.length} movies found</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-6">
        {movieResults.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
