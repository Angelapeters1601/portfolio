import React from "react";
import { FaExclamationTriangle, FaHome, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; // or use Next.js Link

const NotFoundPage = () => {
  return (
    <div
      className="min-h-screen bg-customBlack flex flex-col items-center justify-center
      mt-9 p-6 text-center"
      //   style={{
      //     background:
      //       "radial-gradient(circle at 15% 30%, rgb(15, 15, 15) 0%, rgb(119, 47, 5) 70%, rgb(80, 30, 5) 100%)",
      //   }}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-2xl">
        {/* Error badge */}
        <div className="mx-auto w-24 h-24 flex items-center justify-center bg-red-900/90 text-amber-200 rounded-full mb-6 shadow-lg">
          <FaExclamationTriangle className="text-3xl" />
        </div>

        {/* Main message */}
        <h1 className="text-6xl md:text-8xl font-bold font-sevillana text-amber-400 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-amber-100/90 text-lg mb-8">
          The page you're looking for has vanished like morning mist. Let's get
          you back to solid ground.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
          >
            <FaHome /> Return Home
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-red-900/80 hover:bg-red-800 text-amber-50 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
          >
            <FaEnvelope /> Report Issue
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-amber-200/50 text-sm mt-12">
          Error code: 404 | {new Date().getFullYear()} © Your Brand
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
