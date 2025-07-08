import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    clearNowPlayingMovies: (state) => {
      state.nowPlayingMovies = null;
    },
    setMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});
export const { setNowPlayingMovies, clearNowPlayingMovies, setMovieTrailer } =
  moviesSlice.actions;
export default moviesSlice.reducer;
