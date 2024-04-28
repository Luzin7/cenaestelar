import HomeView from "@/modules/Home";
import { fetchAllMovies } from "@/services/cenaestelarApi";
import { useMoviesStore } from "@/store/movies";

export default async function Home() {
  const data = await fetchAllMovies();

  useMoviesStore.setState({
    movieState: {
      movies: data,
    },
  });
  return <HomeView />;
}
