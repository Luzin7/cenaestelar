import Carousel from "@/components/Carousel";
import { useMoviesStore } from "@/store/movies";

export function MoviesCarousel() {
  const { movies, topMovies } = useMoviesStore.getState().movieState;

  return (
    <>
      <Carousel
        content={movies}
        contentType="movie"
        title="Últimos Filmes Vistos"
      />
      <Carousel content={topMovies} contentType="movie" title="Top 10 Filmes" />
    </>
  );
}
