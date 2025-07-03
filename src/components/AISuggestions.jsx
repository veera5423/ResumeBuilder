import { useState } from "react";

const AISuggestions = () => {
  const [suggestions, setSuggestions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetSuggestions = async () => {
    try {
      setLoading(true);
      setError(null);
      // const result = await suggestImprovements(resumeData);
      setSuggestions(/* result */);
    } catch (err) {
      setError("Failed to get suggestions. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">AI Suggestions</h2>
      <button
        onClick={handleGetSuggestions}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {loading ? "Getting Suggestions..." : "Get AI Suggestions"}
      </button>

      {error && <div className="mt-4 text-red-500">{error}</div>}

      {suggestions && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Suggestions for Improvement:</h3>
          <div className="whitespace-pre-wrap">{suggestions}</div>
        </div>
      )}
    </div>
  );
};

export default AISuggestions;
