import { useState } from "react";

const themes = ["Classic", "Modern", "Minimalist"];

function ThemeSelector({ onSelectTheme }) {
    const [selectedTheme, setSelectedTheme] = useState(themes[0]);

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
        onSelectTheme(theme);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-2">Select Resume Theme</h2>
            <div className="flex gap-2">
                {themes.map((theme) => (
                    <button
                        key={theme}
                        className={`px-4 py-2 rounded ${selectedTheme === theme ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        onClick={() => handleThemeChange(theme)}
                    >
                        {theme}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ThemeSelector;
