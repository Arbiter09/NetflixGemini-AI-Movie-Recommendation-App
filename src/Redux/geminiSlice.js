import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    geminiSearchView: false,
  },
  reducers: {
    toggleGeminiSearchView: (state) => {
      state.geminiSearchView = !state.geminiSearchView;
    },
  },
});

export const { toggleGeminiSearchView } = geminiSlice.actions;

export default geminiSlice.reducer;
