import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import ThemeSelector from "../components/ThemeSelector";
import ResumeUploader from "../components/ResumeUploader";
import ResumeDownload from "../components/ResumeDownload";
import AISuggestions from "../components/AISuggestions";
import { useState } from "react";

const  ResumeBuilder=()=> {
    const [resumeData, setResumeData] = useState({});
    const [selectedTheme, setSelectedTheme] = useState("Classic");

    const handleExtractedData = (text) => {
        const extractedInfo = parseResumeData(text);
        setResumeData(extractedInfo);

    };

    const parseResumeData = (text) => {
        return {
            name: text.match(/Name:\s*(.+)/i)?.[1] || "",
            email: text.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i)?.[0] || "",
            phone: text.match(/Phone:\s*(.+)/i)?.[1] || "",
            experience: text.match(/Experience:\s*([\s\S]+)/i)?.[1] || "",
            education: text.match(/Education:\s*([\s\S]+)/i)?.[1] || "",
            skills: text.match(/Skills:\s*(.+)/i)?.[1] || "",
        };
    };
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Resume Builder</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResumeForm onUpdate={setResumeData} />
                <ResumePreview formData={resumeData} selectedTheme={selectedTheme} />
            </div>
            <div className="mt-6 flex gap-4">
                <ResumeUploader onExtract={handleExtractedData} />
                <ThemeSelector onSelectTheme={setSelectedTheme} />
                <ResumeDownload />
            </div>
            <AISuggestions resumeData={resumeData} />
        </div>
    );
}

export default ResumeBuilder;
