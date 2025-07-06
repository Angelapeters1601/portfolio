import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Loader from "./ui/Loader";

// Lazy load all route components
const AppLayout = lazy(() => import("./components/AppLayout"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  // Initialize dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null
      ? JSON.parse(savedMode)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply dark mode class to HTML root and persist to localStorage
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
      <ScrollToTop />

      {/* Theme Toggle */}
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

      {/* Suspense fallback while lazy components load */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppLayout darkMode={darkMode} />}>
            <Route index element={<Home darkMode={darkMode} />} />
            <Route path="projects" element={<Projects darkMode={darkMode} />} />
            <Route path="projects/:id" element={<ProjectDetails />} />
            <Route path="about" element={<About darkMode={darkMode} />} />
            <Route path="contact" element={<Contact darkMode={darkMode} />} />
            <Route path="resume" element={<Resume darkMode={darkMode} />} />
            <Route path="*" element={<NotFoundPage darkMode={darkMode} />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
