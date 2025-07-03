import { useState } from "react";
import { extractTextFromPDF } from "../utils/fileparser";

function ResumeUploader({ onExtract }) {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState("");

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setUploading(true);
        setError("");
        try {
            const extractedText = await extractTextFromPDF(file);
            onExtract(extractedText);
        } catch (error) {
            console.error("Error extracting resume:", error);
            setError("Failed to extract data from PDF");
        }
        setUploading(false);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-2">Upload Existing Resume</h2>
            <input 
                type="file" 
                accept=".pdf" 
                onChange={handleFileUpload} 
                className="p-2 border rounded w-full"
            />
            {uploading && <p className="text-sm text-gray-500">Extracting data...</p>}
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
}

export default ResumeUploader;
