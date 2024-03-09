import Carousel from "@/components/Carousel";
import { movies } from "@/data";

export function SeriesCarousel() {
  return (
    <>
      <Carousel
        content={movies}
        contentType="serie"
        title="Últimas séries vistas"
      />
      {/* <Carousel content={movies} contentType="serie" title="Bem avaliados" /> */}
    </>
  );
}
