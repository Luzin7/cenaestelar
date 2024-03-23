import Carousel from "@/components/Carousel";
import { movies } from "@/data";

export function MoviesCarousel() {
  return (
    <>
      <Carousel
        content={movies}
        contentType="movie"
        title="Últimos Filmes Vistos"
      />
      <Carousel
        content={movies}
        contentType="movie"
        title="Filmes Bem Avaliados"
      />
    </>
  );
}
