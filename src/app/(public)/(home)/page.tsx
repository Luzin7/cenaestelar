import HomeView from "@/modules/Home";
import {
  fetchAllMovies,
  fetchBestMoviesSeen,
  fetchHighLights,
} from "@/services/cenaestelarApi";
import { useMoviesStore } from "@/store/movies";

export const revalidate = 2400;

export default async function Home() {
  const movies = await fetchAllMovies();
  const topMovies = await fetchBestMoviesSeen();
  const highlights = await fetchHighLights();

  useMoviesStore.setState({
    movies,
    topMovies,
    highlights,
  });
  return <HomeView />;
}
