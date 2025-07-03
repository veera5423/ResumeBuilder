import { useState } from "react";
import { generateDescription } from "../utils/aiService";

const ResumeForm = ({ onUpdate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    linkedin: "",
    github: "",
    experience: "",
    education: [
      {
        instituteName: "",
        degree: "",
        branch: "",
        scoreVal: "",
        type: "",
        from: "",
        to: "",
      },
    ],
    skills: [
      {
        programmingLanguages: "",
        librariesFrameworks: "",
        toolsPlatforms: "",
        databases: "",
      },
    ],
    openSource: [
      {
        projectName: "",
        description: ""
      }
    ],
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    experience: false,
    openSource: new Array(formData.openSource.length).fill(false)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    onUpdate({ ...formData, [name]: value });
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index][name] = value;
    setFormData((prev) => ({ ...prev, education: updatedEducation }));
    onUpdate({ ...formData, education: updatedEducation });
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = [...formData.skills];
    updatedSkills[index][name] = value;
    setFormData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }));
    onUpdate({...formData, skills: updatedSkills });
  };

  const addSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          programmingLanguages: "",
          librariesFrameworks: "",
          toolsPlatforms: "",
          databases: "",
        },
      ],
    }));
  };

  const deleteSkill = (index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          instituteName: "",
          degree: "",
          branch: "",
          scoreVal: "",
          type: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const deleteEducation = (index) => {
    const updatedEducation = [...formData.education];
    updatedEducation.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  const handleOpenSourceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedOpenSource = [...formData.openSource];
    updatedOpenSource[index][name] = value;
    setFormData(prev => ({
      ...prev,
      openSource: updatedOpenSource
    }));
    onUpdate({...formData, openSource: updatedOpenSource});
  };
  
  const addOpenSource = () => {
    setFormData(prev => ({
      ...prev,
      openSource: [...prev.openSource, { projectName: "", description: "" }]
    }));
    setLoading(prev => ({
      ...prev,
      openSource: [...prev.openSource, false]
    }));
  };
  
  const deleteOpenSource = (index) => {
    const updatedOpenSource = [...formData.openSource];
    updatedOpenSource.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      openSource: updatedOpenSource
    }));
    setLoading(prev => ({
      ...prev,
      openSource: prev.openSource.filter((_, i) => i !== index)
    }));
  };

  const handleGenerateDescription = async (type, index = null) => {
    try {
      setError("");
      if (type === "experience") {
        setLoading(prev => ({ ...prev, experience: true }));
        if (!formData.role) {
          throw new Error("Please enter a role before generating experience description.");
        }
        const context = `Role: ${formData.role}\nexperience test=${formData.experience}`;
        const experience = await generateDescription(context);
        setFormData(prev => ({
          ...prev,
          experience: experience
        }));
        onUpdate({...formData, experience: experience});
      } else if (type === "openSource" && index !== null) {
        setLoading(prev => ({
          ...prev,
          openSource: prev.openSource.map((val, i) => i === index ? true : val)
        }));
        if (!formData.openSource[index].projectName) {
          throw new Error("Please enter a project name before generating description.");
        }
        const description = await generateDescription(formData.openSource[index].projectName);
        const updatedOpenSource = [...formData.openSource];
        updatedOpenSource[index].description = description;
        setFormData(prev => ({
          ...prev,
          openSource: updatedOpenSource
        }));
        onUpdate({...formData, openSource: updatedOpenSource});
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(prev => ({
        ...prev,
        experience: false,
        openSource: prev.openSource.map((val, i) => i === index ? false : val)
      }));
    }
  };

  return (
    <>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setError("")}>
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
            </svg>
          </span>
        </div>
      )}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Personal Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded"
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded"
        />
        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={formData.linkedin}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded"
        />
        <input
          type="url"
          name="github"
          placeholder="GitHub URL"
          value={formData.github}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded"
        />

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">Experience</h2>
          <div className="flex gap-2 mb-2">
            <textarea
              name="experience"
              placeholder="Experience Description"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
            />
            <button
              onClick={() => handleGenerateDescription("experience")}
              disabled={loading.experience}
              className={`px-4 py-2 text-white rounded ${loading.experience ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              {loading.experience ? 'Generating...' : 'AI Generate'}
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">Education</h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Education {index + 1}</h3>
                {index > 0 && (
                  <button
                    onClick={() => deleteEducation(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                )}
              </div>
              <input
                type="text"
                name="instituteName"
                placeholder="Institute Name"
                value={edu.instituteName}
                onChange={(e) => handleEducationChange(index, e)}
                className="w-full p-2 border mb-2 rounded"
              />
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
                className="w-full p-2 border mb-2 rounded"
              />
              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={edu.branch}
                onChange={(e) => handleEducationChange(index, e)}
                className="w-full p-2 border mb-2 rounded"
              />
              <input
                type="text"
                name="scoreVal"
                placeholder="Score"
                value={edu.scoreVal}
                onChange={(e) => handleEducationChange(index, e)}
                className="w-full p-2 border mb-2 rounded"
              />
              <input
                type="text"
                name="type"
                placeholder="Type (CGPA/Percentage)"
                value={edu.type}
                onChange={(e) => handleEducationChange(index, e)}
                className="w-full p-2 border mb-2 rounded"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="from"
                  placeholder="From Year"
                  value={edu.from}
                  onChange={(e) => handleEducationChange(index, e)}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="to"
                  placeholder="To Year"
                  value={edu.to}
                  onChange={(e) => handleEducationChange(index, e)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          ))}
          <button
            onClick={addEducation}
            className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Add Education
          </button>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          {formData.skills.map((skill, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Skills {index + 1}</h3>
                {index > 0 && (
                  <button
                    onClick={() => deleteSkill(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                )}
              </div>
              <input
                type="text"
                name="programmingLanguages"
                placeholder="Programming Languages"
                value={skill.programmingLanguages}
                onChange={(e) => handleSkillChange(index, e)}
                className="w-full p-2 border mb-2 rounded"
              />
              <input
                type="text"
                name="librariesFrameworks"
                placeholder="Libraries & Frameworks"
                value={skill.librariesFrameworks}
                onChange={(e) => handleSkillChange(index, e)}
                className="w-full p-2 border mb-2 rounded"
              />
              <input
                type="text"
                name="toolsPlatforms"
                placeholder="Tools & Platforms"
                value={skill.toolsPlatforms}
                onChange={(e) => handleSkillChange(index, e)}
                className="w-full p-2 border mb-2 rounded"
              />
              <input
                type="text"
                name="databases"
                placeholder="Databases"
                value={skill.databases}
                onChange={(e) => handleSkillChange(index, e)}
                className="w-full p-2 border mb-2 rounded"
              />
            </div>
          ))}
          <button
            onClick={addSkill}
            className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Add Skills
          </button>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">Open Source Contributions</h2>
          {formData.openSource.map((project, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Project {index + 1}</h3>
                {index > 0 && (
                  <button
                    onClick={() => deleteOpenSource(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                )}
              </div>
              <input
                type="text"
                name="projectName"
                placeholder="Project Name"
                value={project.projectName}
                onChange={(e) => handleOpenSourceChange(index, e)}
                className="w-full p-2 border mb-2 rounded"
              />
              <div className="flex gap-2">
                <textarea
                  name="description"
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) => handleOpenSourceChange(index, e)}
                  className="w-full p-2 border rounded"
                  rows="3"
                />
                <button
                  onClick={() => handleGenerateDescription("openSource", index)}
                  disabled={loading.openSource[index]}
                  className={`px-4 py-2 text-white rounded ${loading.openSource[index] ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                  {loading.openSource[index] ? 'Generating...' : 'AI Generate'}
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addOpenSource}
            className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Add Project
          </button>
        </div>
      </div>
    </>
  );
};

export default ResumeForm;
