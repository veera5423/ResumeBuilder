import { useRef } from "react";
import ResumeDownload from "./ResumeDownload";

function ResumePreview({ formData, selectedTheme }) {
  // console.log(` in Preview ${formData}`);

  const resumeRef = useRef(null);

  const themeStyles = {
    Classic: "border p-4 rounded bg-white",
    Modern: "border-l-4 border-blue-500 p-4 rounded-lg bg-gray-50 shadow-md",
    Minimalist: "p-4 bg-white border-b-2 border-gray-300 rounded-lg",
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Resume Preview</h2>

      <div ref={resumeRef} className={themeStyles[selectedTheme]}>
        <h1 className="text-2xl font-bold">{formData.name || "Your Name"}</h1>
        <p>{formData.email || "your.email@example.com"}</p>
        <p>{formData.phone || "Your Phone Number"}</p>
        <h3 className="mt-2 font-semibold">Education</h3>

        {Array.isArray(formData.education) &&
          formData.education.map((edu, index) => (
            <div key={index}>
              {/* <h4 className="font-semibold">{edu.instituteName || "Institute Name"}</h4>
                            <p>{edu.branch || "Branch"}</p>
                            <p>{edu.Degree || "Degree"}</p>
                            <p>{edu.scoreVal || "Score"}</p>
                            <p>{edu.type || "Type"}</p> */}
              <p>{edu.instituteName || "Institute Name"}</p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <p>{edu.branch || "Branch"}</p>
                <p>{edu.degree || "Degree"}</p>
                <div className="score" style={{ display: "flex", gap: "2px" }}>
                  <p>{edu.scoreVal || "Score"}</p>
                  <p>{edu.type || "Type"}</p>
                </div>
                <p>
                  {" "}
                  {edu.from}-{edu.to}
                </p>
              </div>
            </div>
          ))}
        {/* <p>{formData.institueName || "Your education details go here."}</p>
                <div style={{display:"flex", gap:"1rem"}}>
                    <p>{formData.branch || "Your education details go here."}</p>
                <p>{formData.Degree || "Your education details go here."}</p>
                <div className="score" style={{display:"flex", gap:"2px"}}>
                    <p>{formData.scoreVal || "Your education details go here."}</p>
                <p>{formData.type || "Your education details go here."}</p>
                </div>
                </div> */}

        {/* skills section */}
        {/* <h3 className="mt-2 font-semibold">Skills</h3>
        {Array.isArray(formData.skills) &&
          formData.skills.map((skill, index) => (
            <div key={index} className="mb-2">
              <p>
                <strong>Programming:</strong> {skill.programmingLanguages}
              </p>
              <p>
                <strong>Frameworks:</strong> {skill.librariesFrameworks}
              </p>
              <p>
                <strong>Tools:</strong> {skill.toolsPlatforms}
              </p>
              <p>
                <strong>Databases:</strong> {skill.databases}
              </p>
            </div>
          ))} */}
        <h3 className="mt-2 font-semibold">Skills</h3>
        {Array.isArray(formData.skills) && formData.skills.length > 0 ? (
          formData.skills.map((skill, index) => (
            <div key={index} className="mb-2">
              <p>
                <strong>Programming Languages:</strong>{" "}
                {skill.programmingLanguages || "N/A"}
              </p>
              <p>
                <strong>Libraries / Frameworks:</strong>{" "}
                {skill.librariesFrameworks || "N/A"}
              </p>
              <p>
                <strong>Tools / Platforms:</strong>{" "}
                {skill.toolsPlatforms || "N/A"}
              </p>
              <p>
                <strong>Databases:</strong> {skill.databases || "N/A"}
              </p>
              <hr className="my-2" />
            </div>
          ))
        ) : (
          <p>List your skills here.</p>
        )}

        <h3 className="mt-2 font-semibold">Experience</h3>
        <p style={{ whiteSpace: "pre-line" }}>
          {formData.experience || "Your work experience details go here."}
        </p>

        <h3 className="mt-2 font-semibold">Open Source Projects</h3>
        {Array.isArray(formData.openSource) &&
        formData.openSource.length > 0 ? (
          formData.openSource.map((project, index) => (
            <div key={index} className="mb-2">
              <p className="font-medium">
                {project.projectName || "Project Name"}
              </p>
              <p style={{ whiteSpace: "pre-line" }}>
                {project.description || "Project description"}
              </p>
              {index < formData.openSource.length - 1 && (
                <hr className="my-2" />
              )}
            </div>
          ))
        ) : (
          <p>No open source projects listed.</p>
        )}

        {/* Remove duplicate skills section */}
        {/* <h3 className="mt-2 font-semibold">Skills</h3> */}
        {/* <p>{formData.skills || "List your skills here."}</p> */}
      </div>

      <ResumeDownload resumeData={formData} />
    </div>
  );
}

export default ResumePreview;
