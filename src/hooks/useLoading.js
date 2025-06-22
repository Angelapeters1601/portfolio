import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, [location.key]);

  return { isLoading };
};
