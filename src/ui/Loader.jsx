import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => (
  <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
    <Skeleton height={80} className="mb-8" />
    <div className="space-y-4">
      <Skeleton height={300} />
      <div className="grid grid-cols-2 gap-4">
        <Skeleton height={200} />
        <Skeleton height={200} />
      </div>
    </div>
  </div>
);

export default Loader;
