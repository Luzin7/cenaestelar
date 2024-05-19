import { ContentProps } from '@models/content'
import { getYearByTimezone } from 'src/functions/getYearByTimezone'
import Rating from '../Rating'
import styles from './movieDetails.module.css'

export function MovieDetails({
  description,
  rating,
  releaseDate,
  shortDescription,
  title,
  globalRating,
}: Omit<
  ContentProps,
  'banner' | 'id' | 'poster' | 'cast' | 'directors' | 'media' | 'genres'
>) {
  return (
    <main>
      <article className={styles.movie_article__container}>
        <div className="my-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {title} <span>{`(${getYearByTimezone(releaseDate)})`}</span>
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {shortDescription}
          </p>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-pretty text-xl">
          {description}
        </p>
        <div className="flex flex-col gap-2 text-xl py-4">
          <Rating
            title="Avaliação dos leigos (mundo)"
            rating={Math.round(Number(globalRating) / 2)}
          />
          <Rating
            title="Avaliação dos especialistas (nós)"
            rating={Math.round(Number(rating))}
          />
        </div>
      </article>
    </main>
  )
}
