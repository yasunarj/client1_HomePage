import { useRef, useState, useEffect } from "react";

export const useSyncHeight = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (!ref.current) return;
      setHeight(ref.current.offsetHeight);
    };

    const timeoutId = setTimeout(updateHeight, 1000);
    window.addEventListener("resize", updateHeight);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateHeight);
    }
  }, []);

  return { height, ref };
};
