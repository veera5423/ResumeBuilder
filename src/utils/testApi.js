// testApi.js
import { InferenceClient } from '@huggingface/inference';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as dotenv from 'dotenv';

// Get the directory path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: new URL('../../.env', import.meta.url).pathname });

const TOKEN = process.env.VITE_HUGGINGFACE_TOKEN;
const hf = new InferenceClient(TOKEN);
const MODEL_ID = 'mistralai/Mixtral-8x7B-Instruct-v0.1';

async function testApi() {
  try {
    console.log('Using token:', TOKEN);
    const prompt = `<|system|>You are a test assistant.</|system|>
<|user|>Say hello</|user|>
<|assistant|>`;

    const response = await hf.textGeneration({
      model: MODEL_ID,
      inputs: prompt,
      parameters: {
        max_new_tokens: 10,
        temperature: 0.7,
        top_p: 0.95,
        return_full_text: false
      }
    });

    console.log('API Test Response:', response);
    return response;
  } catch (error) {
    console.error('API Test Error:', error);
    throw error;
  }
}

testApi();