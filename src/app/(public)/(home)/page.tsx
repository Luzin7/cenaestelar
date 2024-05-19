import HeroSwiper from '@components/Swiper/Hero'
import MoviesCarousel from '@components/Carousel/Home/Movies'
import WishListCarousel from '@components/Carousel/Home/WishList'
import { useMoviesStore } from '@store/movies'
import {
  fetchAllMovies,
  fetchBestMoviesSeen,
  fetchHighLights,
} from '../../../services/cenaestelarApi'

export const revalidate = 2400

export default async function Home() {
  const movies = await fetchAllMovies()
  const topMovies = await fetchBestMoviesSeen()
  const highlights = await fetchHighLights()

  useMoviesStore.setState({
    movies,
    topMovies,
    highlights,
  })

  return (
    <main className="container">
      {highlights.length > 0 ? (
        <>
          <HeroSwiper banners={highlights} />
          <MoviesCarousel />
          <WishListCarousel />
        </>
      ) : (
        <>
          <h1>Os guri nao achou nada :(</h1>
        </>
      )}
    </main>
  )
}
