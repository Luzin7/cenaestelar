"use client";

import { moviesFullData } from "@/data";
import { useParams } from "next/navigation";
import Backdrop from "./components/Backdrop";
import MovieDetails from "./components/MovieDetails";
import styles from "./movie.module.css";

export default function MovieView() {
  const { id } = useParams();

  const fetchMovie = moviesFullData.find((movie) => movie.id === id);

  if (!fetchMovie) {
    return (
      <div>
        <h1>Movie not found</h1>
      </div>
    );
  }

  return (
    <div>
      <Backdrop backdrop={fetchMovie.banner} />
      <main className={styles.container}>
        <MovieDetails {...fetchMovie} />
      </main>
    </div>
  );
}
