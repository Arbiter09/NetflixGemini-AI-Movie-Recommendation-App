import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    geminiSearchView: false,
    movieResults: null,
    movieNames: null,
    isLoading: false,
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
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { toggleGeminiSearchView, addMovieResults, toggleLoading } =
  geminiSlice.actions;

export default geminiSlice.reducer;
