import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {
  clearNowPlayingMovies,
  setNowPlayingMovies,
} from "../Redux/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(setNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();

    return () => {
      // Cleanup if necessary
      dispatch(clearNowPlayingMovies());
    };
  }, []);
};

export default useNowPlayingMovies;
