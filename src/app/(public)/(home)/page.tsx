import { data } from "@/data";
import MoviesCarousel from "@/modules/Carousel/Home/Movies";
import SeriesCarousel from "@/modules/Carousel/Home/Series";
import HeroSwiper from "@/modules/Hero/Swiper";

export default function Home() {
  return (
    <main>
      <HeroSwiper banners={data} />
      <MoviesCarousel />
      <SeriesCarousel />
    </main>
  );
}
