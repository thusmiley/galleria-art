"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageCard from "@/components/ImageCard";
import data from "../utils/data.json";

// Register GSAP plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    const items = gsap.utils.toArray(".items-anim");
    items.forEach((item) => {
      const childItems = item.querySelectorAll(".item-anim");
      const anim = gsap.from(childItems.length > 0 ? childItems : item, {
        duration: 1,
        ease: "power2.out",
        opacity: 0,
        autoAlpha: 0,
        stagger: 0.06,
        y: () => {
          return Math.min(120, item.offsetHeight);
        },
      });

      ScrollTrigger.create({
        animation: anim,
        trigger: item,
        toggleActions: "play none complete none",
        start: "top 90%",
        end: "bottom 10%",
        once: true,
      });
    });
  }, []);

  return (
    <main className="min-h-screen px-6 pt-6 gap-6 columns-1 md:columns-2 md:gap-10 md:px-10 md:pt-10 xl:columns-4 max-w-[1360px] mx-auto">
      {data.map((item, index) => (
        <ImageCard key={index} index={index} item={item} />
      ))}
    </main>
  );
}
