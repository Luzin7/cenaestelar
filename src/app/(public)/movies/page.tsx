import MoviesCarousel from "@/modules/Carousel/Movies";

export default async function Movies() {
  // const data = await fetchAllMovies();

  // useMoviesStore.setState({
  //   movieState: {
  //     movies: data,
  //   },
  // });
  return <MoviesCarousel />;
}
