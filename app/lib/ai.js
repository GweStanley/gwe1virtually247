import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
  defaultProject: process.env.OPENAI_PROJECT_ID,
});

export default openai;
