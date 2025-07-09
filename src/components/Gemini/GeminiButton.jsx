import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGeminiSearchView } from "../../Redux/geminiSlice";

export default function MovieSearchButton() {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const geminiSearchView = useSelector(
    (store) => store.gemini.geminiSearchView
  );

  const handleGeminiToggle = () => {
    dispatch(toggleGeminiSearchView());
  };

  return (
    <div onClick={handleGeminiToggle} className="relative inline-block">
      {/* Soft glow behind the button */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-lg" />

      {/* Main button */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-black/30 hover:cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500"
      >
        {/* Hover-gradient overlay */}
        <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Icon + text */}
        <div className="relative flex items-center gap-2 z-10">
          <svg
            className={`w-5 h-5 transform transition-transform duration-700 ${
              isHovered ? "rotate-12 scale-110" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <span className="relative overflow-hidden block">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">
              {geminiSearchView
                ? "Back to Browse Page!"
                : "AI Movie Recommendations"}
            </span>
            <span className="absolute inset-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              {geminiSearchView ? "Home Page" : "Get Smart Suggestions"}
            </span>
          </span>
        </div>
      </button>
    </div>
  );
}
