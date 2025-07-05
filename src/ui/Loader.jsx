import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-6 transition-all duration-700"
      style={{ backgroundColor: "#2e1f1a" }}
    >
      <div className="w-full max-w-3xl space-y-10 animate-fade-in">
        {/* Title Skeleton */}
        <Skeleton
          height={60}
          baseColor="#4b2e2a"
          highlightColor="#6e4b44"
          duration={2.5}
          borderRadius={12}
        />

        {/* Main section skeleton */}
        <Skeleton
          height={250}
          baseColor="#4b2e2a"
          highlightColor="#6e4b44"
          duration={2.5}
          borderRadius={12}
        />

        {/* Two-column skeletons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Skeleton
            height={180}
            baseColor="#4b2e2a"
            highlightColor="#6e4b44"
            duration={2.5}
            borderRadius={12}
          />
          <Skeleton
            height={180}
            baseColor="#4b2e2a"
            highlightColor="#6e4b44"
            duration={2.5}
            borderRadius={12}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
