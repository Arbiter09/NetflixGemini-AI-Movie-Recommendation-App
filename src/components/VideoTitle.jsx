import { Info, Play } from "lucide-react";
import useTruncateWords from "../hooks/useTruncateWords";
import React from "react";
import { WORD_LIMIT } from "../utils/constants";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold mb-6 ">{title}</h1>
      <p className="text-xl w-1/3 text-gray-300 font-light">
        {useTruncateWords(description, WORD_LIMIT)}
      </p>
      <div className="flex gap-4 mt-8">
        <button className="group flex items-center gap-3 px-6 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
          <Play className="w-5 h-5 group-hover:text-red-600 transition-colors duration-300" />
          <span>Play</span>
        </button>
        <button className="group flex items-center gap-3 px-6 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 backdrop-blur-sm">
          <Info className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300" />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
