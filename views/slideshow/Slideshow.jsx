"use client";
import { useSlideshowContext } from "@/context/useSlideshowProvider";
import { useEffect, useState } from "react";
import data from "../../utils/data.json";
import SlideshowController from "@/components/SlideshowController";
import Link from "next/link";

const Slideshow = ({ params }) => {
  const [card, setCard] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const { currentSlide, setCurrentSlide } = useSlideshowContext();
  const [isLighbox, setIsLighbox] = useState(false);

  const reRenderCard = () => {
    if (!params.slug) return;
    const i = data.filter(
      (item) =>
        item?.name.toLowerCase() ===
        params.slug.toString().replace(/-/g, " ").toLowerCase()
    )[0];
    if (i) {
      setCard(i);
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    reRenderCard();
  }, [params.slug, data]);

  return (
    <main className="min-h-screen">
      <section className="relative max-w-[1360px] mx-auto p-6 mb-[123px] md:p-10 md:mb-5 xl:flex xl:justify-between xl:items-start xl:space-x-[30px] xl:pt-[100px] xl:mb-[140px] xl:pb-0">
        {/* image block  */}
        <div className="relative xl:w-[69%]">
          <div className="w-full">
            <button
              className="absolute animation-effect cursor-pointer top-4 left-4 bg-black/70 hover:bg-white/20 py-[14px] px-6 flex items-center justify-end text-white text-[10px] tracking-[2.14px] md:bottom-4 md:top-auto"
              onClick={() => setIsLighbox(true)}
            >
              <img
                src="/assets/shared/icon-view-image.svg"
                alt="view image"
                className="w-3 h-auto object-contain object-center mr-[14px]"
              />
              VIEW IMAGE
            </button>
            {isLoaded && (
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={card?.images.hero.small}
                />
                <source
                  media="(min-width: 769px)"
                  srcSet={card?.images.hero.large}
                />
                <img
                  src={card?.images.hero.small}
                  alt={card?.name}
                  className="w-full h-auto object-cover object-center md:max-w-[60vw] xl:w-[475px]"
                  priority
                />
              </picture>
            )}
          </div>

          {/* name and artist block  */}
          <div className="absolute -bottom-[118px] w-full md:top-0 md:right-0 md:bottom-auto xl:max-w-[445px]">
            <div className="bg-white p-6 mr-[20vw] md:mr-0 md:ml-[35vw] md:pl-[65px] md:pr-0 md:pb-[65px] md:pt-0 md:right-0 xl:ml-auto">
              <h1 className="text-[24px] leading-[29px] break-words font-bold md:text-[56px] md:leading-[64px] max-w-[380px]">
                {card?.name}
              </h1>
              <h2 className="text-[15px] text-darkGrey mt-2 md:mt-6">
                {card?.artist.name}
              </h2>
            </div>
            {isLoaded && (
              <img
                src={card?.artist.image}
                alt={card?.artist.name || ""}
                className="w-[64px] h-auto object-contain object-center ml-6 md:w-[128px] md:ml-0 md:float-right md:mr-[65px] xl:float-none xl:absolute xl:top-[496px] xl:left-auto xl:mr-auto xl:right-[50%]"
              />
            )}
          </div>
        </div>
        {/* text block  */}
        <div className="mt-[98px] md:mt-[64px] xl:w-[31%] xl:mt-0">
          <h3 className="text-[100px] leading-[100px] font-bold text-lightestGrey text-right md:text-[200px] md:leading-[150px] md:text-left xl:text-right xl:text-[150px]">
            {card?.year}
          </h3>
          <p className="text-darkGrey text-[14px] leading-[28px] -mt-7 mb-10 md:mt-[-75px] md:mx-[75px] md:mb-[68px] xl:mt-[-45px] xl:ml-0 xl:mr-[65px] xl:mb-0">
            {card?.description}
          </p>
          <Link
            href={`${card?.source}`}
            target="_blank"
            className="text-[9px] tracking-[1.93px] text-darkGrey hover:text-black animation-effect font-bold underline md:ml-[75px] xl:ml-0 xl:absolute xl:bottom-0"
          >
            GO TO SOURCE
          </Link>
        </div>
      </section>
      <SlideshowController card={card} />

      {isLighbox && (
        <div
          className="fixed w-full h-full top-0 left-0 bg-black/80 flex justify-center items-center"
          //   onClick={() => setIsLighbox(false)}
        >
          <div className="max-w-[1360px] px-6 w-full h-auto md:px-10 md:h-[90vh]">
            <button
              className="text-[14px] tracking-[3px] text-white font-bold text-right w-full max-w-[1360px] mb-8 md:mb-10"
              onClick={() => setIsLighbox(false)}
            >
              CLOSE
            </button>
            <img
              src={card?.images.gallery}
              alt={card?.name || ""}
              className="w-full h-auto object-cover object-center mx-auto max-w-[1360px] md:h-[80vh] md:w-auto"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Slideshow;
