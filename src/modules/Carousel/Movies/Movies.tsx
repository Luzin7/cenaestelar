import Carousel from "@/components/Carousel";
import { useMoviesStore } from "@/store/movies";

export function MoviesCarousel() {
  const { movies } = useMoviesStore.getState();

  return (
    <>
      <Carousel content={movies} contentType="movie" title="Comédia" />
      <Carousel content={movies} contentType="movie" title="Drama" />
      <Carousel content={movies} contentType="movie" title="Ação" />
      <Carousel content={movies} contentType="movie" title="Animação" />
      <Carousel content={movies} contentType="movie" title="Aventura" />
      <Carousel content={movies} contentType="movie" title="Suspense" />
      <Carousel content={movies} contentType="movie" title="Terror" />
    </>
  );
}
