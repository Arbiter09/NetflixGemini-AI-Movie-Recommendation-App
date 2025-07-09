import { Search } from "lucide-react";
import geminiAi from "../../utils/GeminiAi";
import { useRef } from "react";
import SearchTMDBMovie from "../../utils/SearchTMDBMovie";

const GeminiSearchBar = () => {
  const searchText = useRef(null);

  const handleGeminiSearchClick = async () => {
    const user_input = searchText.current.value;

    const query = `You are an AI-powered movie recommendation engine. When the user gives any free-form request—whether it’s a genre (“Horror Movies”), an era (“something old”), a mood (“something uplifting”), a theme (“space adventure”), or any other description—your job is to interpret their intent and return exactly 5 movie titles that best match.  
    • Output only the titles, as a single comma-separated list.  
    • Do not include any extra text, numbering, or explanations.
    User request: "${user_input}"
    `;

    const response = await geminiAi.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
    });

    const movieResults =
      response.candidates[0].content.parts[0].text.split(",");

    console.log(movieResults);
    const promiseArray = movieResults.map((movie) => SearchTMDBMovie(movie));

    const res = await Promise.all(promiseArray);
    console.log(res);
  };

  return (
    <div className="pt-30 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent">
          Search
        </h1>
        <p className="text-gray-300">
          Discover thousands of movies, TV shows, and documentaries
        </p>
      </header>

      {/* Search Form */}
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative w-full max-w-4xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            ref={searchText}
            placeholder="Search for movies, TV shows, documentaries..."
            className="w-full py-4 pl-12 pr-12 text-lg bg-gray-900/80 border-2 rounded-xl placeholder-gray-400 focus:outline-none focus:border-red-600 transition"
          />
        </div>

        <button
          onClick={handleGeminiSearchClick}
          type="submit"
          className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
