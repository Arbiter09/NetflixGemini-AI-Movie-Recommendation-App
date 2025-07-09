import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { clearTopRatedMovies, setTopRatedMovies } from "../Redux/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(setTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
    return () => {
      dispatch(clearTopRatedMovies());
    };
  }, []);
};

export default useTopRatedMovies;
