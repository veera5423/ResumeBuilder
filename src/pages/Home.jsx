import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">AI-Powered Resume Builder</h1>
            <Link to="/resume-builder" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Build Your Resume
            </Link>
        </div>
    );
}

export default Home;