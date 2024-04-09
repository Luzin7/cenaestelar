import { fetchAllMovies } from "@/services/cenaestelarApi";
import { useMoviesStore } from "@/store/movies";
import HomeView from "@/views/home";

export default async function Home() {
  const data = await fetchAllMovies();

  useMoviesStore.setState({
    movieState: {
      movies: data,
    },
  });
  return <HomeView />;
}
