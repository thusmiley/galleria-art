"use client";
import { useRouter } from "next/navigation";
import { useSlideshowContext } from "@/context/useSlideshowProvider";

const ImageCard = ({ index, item }) => {
  const router = useRouter();
  const { currentSlide, setCurrentSlide, totalSlides } = useSlideshowContext();

  return (
    <div
      className="mb-6 relative hover:opacity-50 animation-effect cursor-pointer items-anim md:mb-10"
      onClick={() => {
        setCurrentSlide(index);
        router.push(`/${item.name.split(` `).join(`-`)}`);
      }}
    >
      <img
        src={item.images.thumbnail}
        alt={item.name}
        className="w-full h-auto object-cover object-center item-anim"
      />
      <div className="h-[170px] w-full linear-bg absolute bottom-0 z-10 item-anim" />
      <div className="absolute bottom-8 left-8 right-8 z-20 item-anim">
        <h2 className="headingTitle item-anim">{item.name}</h2>
        <p className="artistName mt-[7px] item-anim">{item.artist.name}</p>
      </div>
    </div>
  );
};

export default ImageCard;
