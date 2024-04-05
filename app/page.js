import ImageCard from "@/components/ImageCard";
import data from "../utils/data.json";

export default function Home() {
  return (
    <main className="min-h-screen px-6 pt-6 gap-6 columns-1 md:columns-2 md:gap-10 md:px-10 md:pt-10 xl:columns-4 max-w-[1360px] mx-auto">
      {data.map((item, index) => (
        <ImageCard key={index} index={index} item={item} />
      ))}
    </main>
  );
}
