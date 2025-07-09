import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    geminiSearchView: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGeminiSearchView: (state) => {
      state.geminiSearchView = !state.geminiSearchView;
    },
    addMovieResults: (state, action) => {
      const { movieResults, movieNames } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGeminiSearchView, addMovieResults } = geminiSlice.actions;

export default geminiSlice.reducer;
