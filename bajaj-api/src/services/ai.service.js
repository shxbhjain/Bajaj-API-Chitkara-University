import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"
});

export const askAI = async (question) => {
  if (!question || typeof question !== "string") {
    const error = new Error("Invalid AI input");
    error.status = 400;
    throw error;
  }

  try {
    const prompt = `Answer in exactly ONE WORD only. No explanation. Question: ${question}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    return text.replace(/[^\w]/g, "");
  } catch (err) {
    const error = new Error("AI service unavailable");
    error.status = 502;
    throw error;
  }
};
