import MoviesCarousel from "@/modules/Carousel/Home/Movies";
import WishListCarousel from "@/modules/Carousel/Home/WishList";
import HeroSwiper from "@/modules/Swiper/Hero";
import { useMoviesStore } from "@/store/movies";

export default async function HomeView() {
  const movies = useMoviesStore.getState().movieState.movies;
  return (
    <main>
      <HeroSwiper banners={movies} />
      <MoviesCarousel />
      <WishListCarousel />
      {/* <SeriesCarousel /> */}
    </main>
  );
}
