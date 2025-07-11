import { useDispatch } from "react-redux";
import { setMovieTrailer } from "../Redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    const filterData = json.results.filter((clip) => clip.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(setMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
