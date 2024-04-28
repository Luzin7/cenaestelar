import MoviesCarousel from "@/modules/Carousel/Movies";
import { fetchAllMovies } from "@/services/cenaestelarApi";
import { useMoviesStore } from "@/store/movies";

export default async function Movies() {
  const data = await fetchAllMovies();

  useMoviesStore.setState({
    movieState: {
      movies: data,
    },
  });
  return <MoviesCarousel />;
}
