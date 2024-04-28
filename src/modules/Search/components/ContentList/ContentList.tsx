"use client";

import { urlSlugMaker } from "@/functions/urlSlugMaker";
import { useMoviesStore } from "@/store/movies";
import { ContentProps } from "@/types/content"; // Importe o tipo ContentProps
import Image from "next/image";
import Link from "next/link";
import styles from "./contentList.module.css";

export function ContentList() {
  const { movieState } = useMoviesStore();

  return (
    <div className={styles.container}>
      {movieState.movies.map(({ poster, id, title }: ContentProps) => (
        <div key={id} className={styles.content_wrapper}>
          <Link href={`/movie/${urlSlugMaker(title)}/${id}`}>
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
  );
}
