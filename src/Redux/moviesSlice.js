import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    clearNowPlayingMovies: (state) => {
      state.nowPlayingMovies = null;
    },
  },
});
export const { setNowPlayingMovies, clearNowPlayingMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
