"use client";
import data from "../utils/data.json";
import { useRouter } from "next/navigation";

import { createContext, useContext, useEffect, useState } from "react";

const SlideshowContext = createContext();

export function useSlideshowContext() {
  return useContext(SlideshowContext);
}

export function SlideshowProvider({ children }) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);

  const totalSlides = data.length;

  const goToCurrentSlide = (index) => {
    router.push(`/${data[index].name.split(` `).join(`-`)}`);
  };

  useEffect(() => {
    setCurrentPercent(((currentSlide + 1) / totalSlides) * 100);
  }, [currentSlide]);

  return (
    <SlideshowContext.Provider
      value={{
        currentSlide,
        setCurrentSlide,
        goToCurrentSlide,
        totalSlides,
        currentPercent,
        setCurrentPercent,
      }}
    >
      {children}
    </SlideshowContext.Provider>
  );
}
