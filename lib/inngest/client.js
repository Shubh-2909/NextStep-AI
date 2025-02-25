import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "nextStep-ai", // Unique app ID
  name: "Next Step Ai",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
