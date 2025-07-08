import { Info, Play } from "lucide-react";
import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold mb-6">{title}</h1>
      <p className="texl-lg w-1/3">{description}</p>
      <div className="flex gap-2">
        <button className="flex gap-1 mt-6 border-2 border-black p-4 cursor-pointer rounded-2xl bg-white">
          <Play />
          <span>Play</span>
        </button>
        <button className="flex gap-1 mt-6 border-2 border-black p-4 cursor-pointer rounded-2xl bg-white">
          <Info />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
