import MoviesCarousel from "@/modules/Carousel/Home/Movies";
import WishListCarousel from "@/modules/Carousel/Home/WishList";
import HeroSwiper from "@/modules/Swiper/Hero";
import { useMoviesStore } from "@/store/movies";

export default async function HomeView() {
  const { highlights } = useMoviesStore.getState();
  return (
    <main>
      {highlights.length > 0 ? (
        <>
          <HeroSwiper banners={highlights} />
          <MoviesCarousel />
          <WishListCarousel />
        </>
      ) : (
        <>
          <h1>Os guri nao achou nada :(</h1>
        </>
      )}
    </main>
  );
}
