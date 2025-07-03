export async function fetchAIContent(jobRole) {
    const API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";
    const API_KEY = import.meta.env.HF_API_KEY; // Load key securely
  
    if (!API_KEY) {
      console.error("Hugging Face API key is missing. Make sure it's set in the .env file.");
      return "AI content not available.";
    }
  
    const headers = {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    };
  
    const prompt = `Generate a professional resume summary, skills, and experience for a ${jobRole} role.`;
  
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({ inputs: prompt }),
      });
  
      if (!response.ok) {
        console.error("API request failed:", response.statusText);
        return "AI content could not be retrieved.";
      }
  
      const data = await response.json();
      return data[0]?.generated_text || "AI content not available.";
    } catch (error) {
      console.error("Error fetching AI content:", error);
      return "AI content not available.";
    }
  }
  