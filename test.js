import 'dotenv/config';   // loads .env.local automatically
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function run() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Hello, are you working?" }]
    });
    console.log(response.choices[0].message.content);
  } catch (err) {
    console.error(err);
  }
}

run();
