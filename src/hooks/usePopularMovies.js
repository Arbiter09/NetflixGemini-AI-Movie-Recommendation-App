import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setPopularMovies, clearPopularMovies } from "../Redux/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(setPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();

    return () => {
      // Cleanup if necessary
      dispatch(clearPopularMovies());
    };
  }, []);
};

export default usePopularMovies;
