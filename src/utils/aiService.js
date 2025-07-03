// import { InferenceClient } from '@huggingface/inference';

// Public Hugging Face Space for text generation (replace with a working one if needed)
const PUBLIC_SPACE_URL = 'https://api-inference.huggingface.co/models/gpt2';

export const generateDescription = async (context) => {
  if (!context?.trim()) {
    throw new Error('Please provide some context for the description.');
  }

  // Parse role and experience from context
  let role = '', experience = '';
  if (context.startsWith('Role:')) {
    const parts = context.split('\n');
    role = parts[0].replace('Role:', '').trim();
    experience = parts[1]?.replace('experience test=', '').trim() || '';
  }

  const prompt = `Create a professional resume description for a ${role || 'job'} position. Experience details: ${experience || 'Entry level position'}. Keep it concise (2-3 sentences), focus on key responsibilities and achievements, use active voice and professional tone, highlight relevant skills and expertise.`;

  try {
    const response = await fetch(PUBLIC_SPACE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputs: prompt })
    });
    if (!response.ok) throw new Error('Public Space unavailable');
    const result = await response.json();
    if (result?.error || !result?.choices?.[0]?.text) throw new Error('No text generated');
    return result.choices[0].text.trim();
  } catch {
    // Fallback: template-based description
    return `As a ${role || 'professional'}, demonstrated ability to ${experience ? experience : 'contribute effectively to team goals and deliver results in a fast-paced environment'}. Skilled in key responsibilities and committed to continuous improvement.`;
  }
};
