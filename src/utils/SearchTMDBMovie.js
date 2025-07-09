import { API_OPTIONS } from "./constants";

const SearchTMDBMovie = async (movie) => {
  const myMovie = movie.trim();
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${myMovie}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );
  const json = await data.json();

  return json.results[0];
};

export default SearchTMDBMovie;
