'use client'

import { ContentProps } from '@models/content'
import { useMoviesStore } from '@store/movies'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'src/functions/slugify'
import styles from './contentList.module.css'

export function ContentList() {
  const { movies } = useMoviesStore()

  return (
    <div className={styles.container}>
      {movies.map(({ poster, id, title }: ContentProps) => (
        <div key={id} className={styles.content_wrapper}>
          <Link href={`/movie/${slugify(title)}/${id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              alt={title}
              width={500}
              height={500}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}
