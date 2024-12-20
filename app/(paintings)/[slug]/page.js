export function generateMetadata({ params }, parent) {
  return {
    title: params.slug.toString().replace(/-/g, " "),
  };
}

import Slideshow from "@/views/slideshow/Slideshow";

const page = ({ params }) => {
  return <Slideshow params={params} />;
};

export default page;
