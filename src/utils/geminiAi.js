import { GoogleGenAI } from "@google/genai";

const api = import.meta.env.VITE_GEMINI_API_KEY;
const geminiAi = new GoogleGenAI({ apiKey: api });

export default geminiAi;
