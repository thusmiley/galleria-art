"use client";
import { useSlideshowContext } from "@/context/useSlideshowProvider";
import { useEffect, useState } from "react";
import Image from "next/image";
import iconNext from "/public/assets/shared/icon-next-button.svg";
import iconBack from "/public/assets/shared/icon-back-button.svg";
import LinearProgress from "@mui/material/LinearProgress";

const SlideshowController = ({ card }) => {
  const {
    currentSlide,
    setCurrentSlide,
    totalSlides,
    currentPercent,
    setCurrentPercent,
    goToCurrentSlide,
  } = useSlideshowContext();

  useEffect(() => {
    goToCurrentSlide(currentSlide);
  }, [currentSlide]);

  return (
    <div className="xl:max-w-[1360px] mx-auto">
      <div className="mb-4 md:mt-6 xl:mx-10">
        <LinearProgress
          variant="determinate"
          value={currentPercent}
          sx={{
            bgcolor: "#E5E5E5",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#000",
            },
            height: "1px",
          }}
        />
      </div>
      <div className="flex justify-between items-center px-6 pb-4 md:pb-6 md:px-10">
        <div>
          <h3 className="text-[14px] font-bold md:text-[18px]">{card?.name}</h3>
          <p className="text-[10px] text-darkGrey mt-[9px] md:text-[13px]">
            {card?.artist.name}
          </p>
        </div>
        <div className="flex items-center space-x-6 md:space-x-10">
          <button disabled={currentSlide === 0 ? true : false}>
            <Image
              src={iconBack}
              alt="back"
              width={26}
              height={24}
              className={`${
                currentSlide === 0
                  ? "opacity-50 cursor-default"
                  : "cursor-pointer"
              } w-[26px] h-auto object-contain object-center hover:opacity-50 `}
              onClick={() => setCurrentSlide(currentSlide - 1)}
            />
          </button>
          <button disabled={currentSlide === totalSlides - 1 ? true : false}>
            <Image
              src={iconNext}
              alt="back"
              width={26}
              height={24}
              className={`${
                currentSlide === totalSlides - 1
                  ? "opacity-50 cursor-default"
                  : "cursor-pointer"
              } w-[26px] h-auto object-contain object-center hover:opacity-50 `}
              onClick={() => setCurrentSlide(currentSlide + 1)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideshowController;
