import Carousel from "@/components/Carousel";
import { movies } from "@/data";

export function WishListCarousel() {
  return (
    <>
      <Carousel
        content={movies}
        contentType="wishList"
        title="Últimos vistos"
      />
      {/* <Carousel content={movies} contentType="serie" title="Bem avaliados" /> */}
    </>
  );
}
