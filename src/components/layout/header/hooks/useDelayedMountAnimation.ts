import { useEffect, useState } from "react";

export const useDelayedMountAnimation = (delayMs = 100) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  return isLoaded;
};
