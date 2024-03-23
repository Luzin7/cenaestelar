import MoviesCarousel from "@/modules/Carousel/Movies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filme",
  description: "Reviews duvidosas, ou não.",
};

export default function Movies() {
  return <MoviesCarousel />;
}
