import { useEffect, useState } from "react";

interface Dimension {
  width: number;
  height: number;
}

function useWindowSize(): Dimension {
  const isSSR = typeof window === undefined;

  const [windowSize, setWindowSize] = useState<Dimension>({
    width: 1200,
    height: 800,
  });

  const handleResize = () => {
    setWindowSize({ width: window?.innerWidth, height: window?.innerHeight });
  };

  useEffect(() => {
    setWindowSize({
      width: isSSR ? 1200 : window?.innerWidth,
      height: isSSR ? 800 : window?.innerHeight,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //   log(windowSize)

  return windowSize;
}

export default useWindowSize;

// export const dimension = useWindowSize()
