"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSlideshowContext } from "@/context/useSlideshowProvider";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { currentSlide, setCurrentSlide, goToCurrentSlide } =
    useSlideshowContext();

  return (
    <header className="max-w-[1360px] mx-auto">
      <div className="flex justify-between items-center p-6 md:px-10 md:py-7 xl:py-10">
        <Link href="/">
          <img
            src="/assets/shared/logo.svg"
            alt="galleria logo"
            className="w-[113px] h-auto object-contain object-center xl:w-[170px"
            priority
          />
        </Link>
        {pathname === "/" ? (
          <button
            className="text-darkGrey hover:text-black animation-effect font-bold text-[9px] tracking-[1.93px] md:text-[12px] md:tracking-[2.57px]"
            onClick={() => {
              setCurrentSlide(0);
              goToCurrentSlide(currentSlide);
            }}
          >
            START SLIDESHOW
          </button>
        ) : (
          <button
            className="text-darkGrey hover:text-black animation-effect font-bold text-[9px] tracking-[1.93px] md:text-[12px] md:tracking-[2.57px]"
            onClick={() => router.push("/")}
          >
            STOP SLIDESHOW
          </button>
        )}
      </div>
      <div className="h-[1px] bg-lightGrey xl:mx-10" />
    </header>
  );
};

export default Header;
