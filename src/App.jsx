import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Designs from "./components/Designs";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  // Initialize state with user's preferred color scheme
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply dark mode class to root element and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <BrowserRouter>
      {/* Theme Toggle Button (fixed position) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-amber-500 text-white dark:bg-amber-700 shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
      >
        {darkMode ? (
          <span className="text-xl">☀️</span>
        ) : (
          <span className="text-xl">🌙</span>
        )}
      </button>

      <Routes>
        <Route path="/" element={<AppLayout darkMode={darkMode} />}>
          <Route index element={<Home darkMode={darkMode} />} />
          <Route path="projects" element={<Projects darkMode={darkMode} />} />
          <Route path="about" element={<About darkMode={darkMode} />} />
          <Route path="contact" element={<Contact darkMode={darkMode} />} />
          <Route path="design" element={<Designs darkMode={darkMode} />} />
          <Route path="resume" element={<Resume darkMode={darkMode} />} />
          <Route path="*" element={<NotFoundPage darkMode={darkMode} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
