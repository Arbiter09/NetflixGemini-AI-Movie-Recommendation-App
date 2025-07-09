import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    clearNowPlayingMovies: (state) => {
      state.nowPlayingMovies = null;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    clearPopularMovies: (state) => {
      state.popularMovies = null;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    clearTopRatedMovies: (state) => {
      state.topRatedMovies = null;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    clearUpcomingMovies: (state) => {
      state.upcomingMovies = null;
    },
    setMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});
export const {
  setNowPlayingMovies,
  clearNowPlayingMovies,
  setMovieTrailer,
  setPopularMovies,
  clearPopularMovies,
  setTopRatedMovies,
  clearTopRatedMovies,
  setUpcomingMovies,
  clearUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
