"use client";
import { useMoviesStore } from "@/store/movies";
import { ContentProps } from "@/types/content"; // Importe o tipo ContentProps
import styles from "./contentList.module.css";
import Image from "next/image";

export function ContentList() {
  const { movieState } = useMoviesStore();

  return (
    <div className={styles.container}>
      {movieState.movies.map((movie: ContentProps, index: number) => (
        <div key={index} className={styles.content_wrapper}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
            alt={movie.title}
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
