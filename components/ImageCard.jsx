"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSlideshowContext } from "@/context/useSlideshowProvider";

const ImageCard = ({ index, item }) => {
  const router = useRouter();
  const { currentSlide, setCurrentSlide, totalSlides } = useSlideshowContext();

  return (
    <div
      className="mb-6 relative hover:opacity-50 animation-effect cursor-pointer md:mb-10"
      onClick={() => {
        setCurrentSlide(index);
        router.push(`/${item.name.split(` `).join(`-`)}`);
      }}
    >
      <Image
        src={item.images.thumbnail}
        alt={item.name}
        width={327}
        height={400}
        className="w-full h-auto object-cover object-center"
      />
      <div className="h-[170px] w-full linear-bg absolute bottom-0 z-10" />
      <div className="absolute bottom-8 left-8 right-8 z-20">
        <h2 className="headingTitle">{item.name}</h2>
        <p className="artistName mt-[7px]">{item.artist.name}</p>
      </div>
    </div>
  );
};

export default ImageCard;
