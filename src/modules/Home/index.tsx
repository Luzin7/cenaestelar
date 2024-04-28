import MoviesCarousel from "@/modules/Carousel/Home/Movies";
import WishListCarousel from "@/modules/Carousel/Home/WishList";
import HeroSwiper from "@/modules/Swiper/Hero";
import { useMoviesStore } from "@/store/movies";

export default async function HomeView() {
  const movies = useMoviesStore.getState().movieState.movies;
  return (
    <main>
      {movies.length > 0 ? (
        <>
          <HeroSwiper banners={movies} />
          <MoviesCarousel />
          <WishListCarousel />
        </>
      ) : (
        <>
          <h1>Os guri nao achou nada :(</h1>
          <WishListCarousel />
        </>
      )}
    </main>
  );
}
