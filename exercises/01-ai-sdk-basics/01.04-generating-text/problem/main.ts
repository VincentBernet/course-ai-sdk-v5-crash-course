import { google } from '@ai-sdk/google';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

// TODO: Choose a model. I recommend using the Google Gemini model:
// gemini-2.0-flash-lite
const modelGoogle = google('gemini-2.0-flash-lite');
const modelOpenAi = openai('gpt-5-nano');

const prompt =
  'What is the capital of France? Precise your model name at the end';

// TODO: Use generateText to get the result
const resultGoogle = await generateText({
  model: modelGoogle,
  prompt,
});
/*
const resultOpenAi = await generateText({
  model: modelOpenAi,
  prompt,
});
*/

console.log(resultGoogle.text);
// console.log(resultOpenAi.text);
