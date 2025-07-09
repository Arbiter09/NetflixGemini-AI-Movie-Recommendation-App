import { useNavigate } from "react-router";
import { getImageUrl } from "../utils/utilityFunctions";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate("/movies/" + movie.original_title);
  };

  return (
    <div
      onClick={handleMovieClick}
      className="w-48 mr-4 cursor-pointer transform transition duration-300 hover:scale-105"
    >
      <img
        alt="movie poster"
        src={getImageUrl(movie.poster_path)}
        className="rounded-2xl"
      />
    </div>
  );
};

export default MovieCard;
