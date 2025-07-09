import geminiAi from "../utils/GeminiAi";
import SearchTMDBMovie from "../utils/SearchTMDBMovie";

const useGeminiToGetMovies = async (user_input) => {
  const query = `You are an AI-powered movie recommendation engine. When the user gives any free-form request—whether it’s a genre (“Horror Movies”), an era (“something old”), a mood (“something uplifting”), a theme (“space adventure”), or any other description—your job is to interpret their intent and return exactly 5 movie titles that best match.  
    • Output only the titles, as a single comma-separated list.  
    • Do not include any extra text, numbering, or explanations.
    User request: "${user_input}"
    `;

  const response = await geminiAi.models.generateContent({
    model: "gemini-2.5-flash",
    contents: query,
  });

  const movieNames = response.candidates[0].content.parts[0].text.split(",");

  console.log(movieNames);
  const promiseArray = movieNames.map((movie) => SearchTMDBMovie(movie));

  const movieResults = await Promise.all(promiseArray);

  return movieResults;
};

export default useGeminiToGetMovies;
