'use client'

import { ContentProps } from '@models/content'
import { fetchMovieById } from '@services/cenaestelarApi'
import { AxiosError } from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Backdrop from './components/Backdrop'
import MovieDetails from './components/MovieDetails'

export default function MovieView() {
  const { id } = useParams()
  const [movie, setMovie] = useState<ContentProps>()

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieById(id as string)

        setMovie(response)
      } catch (error: unknown) {
        if ((error as AxiosError).response?.status === 404) {
          toast.error('Movie not found.')
        } else {
          toast.error('An error occurred while fetching the movie.')
        }
      }
    }

    fetchMovie()
  }, [id])

  if (!movie) {
    return (
      <div>
        <h1>Não há nada aqui! :o</h1>
      </div>
    )
  }

  return (
    <div>
      <Backdrop backdrop={movie.banner} />
      <main className="container">
        <MovieDetails {...movie} />
      </main>
    </div>
  )
}
