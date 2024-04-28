import Carousel from "@/components/Carousel";
import { useMoviesStore } from "@/store/movies";

export function MoviesCarousel() {
  const { movies } = useMoviesStore.getState().movieState;

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
