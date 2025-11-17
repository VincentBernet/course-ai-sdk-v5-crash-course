import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

const model = google('gemini-2.0-flash');

const stream = streamText({
  model,
  prompt: 'Generate me table of random data ?',
});

for await (const chunk of stream.toUIMessageStream()) {
  console.log(chunk);
}
