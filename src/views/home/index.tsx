import { data } from "@/data";
import MoviesCarousel from "@/modules/Carousel/Home/Movies";
import SeriesCarousel from "@/modules/Carousel/Home/Series";
import HeroSwiper from "@/modules/Swiper/Hero";

export default function HomeView() {
  return (
    <main>
      <HeroSwiper banners={data} />
      <MoviesCarousel />
      <SeriesCarousel />
    </main>
  );
}
