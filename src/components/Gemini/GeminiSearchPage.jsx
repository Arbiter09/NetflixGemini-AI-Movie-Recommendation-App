import { useState } from "react";

import GeminiSearchBar from "./GeminiSearchBar";

export default function GeminiSearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <GeminiSearchBar />
    </div>
  );
}
