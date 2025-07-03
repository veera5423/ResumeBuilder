import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   console.log("Hugging Face API Key:", import.meta.env.VITE_HF_API_KEY);
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
