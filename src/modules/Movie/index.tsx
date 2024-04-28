"use client";

import { fetchMovieById } from "@/services/cenaestelarApi";
import { ContentProps } from "@/types/content";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Backdrop from "./components/Backdrop";
import MovieDetails from "./components/MovieDetails";
import styles from "./movie.module.css";

export default function MovieView() {
  const { id } = useParams();
  const [movie, setMovie] = useState<ContentProps>();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieById(id as string);

        setMovie(response);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <div>
        <h1>Não há nada aqui! :o</h1>
      </div>
    );
  }

  return (
    <div>
      <Backdrop backdrop={movie.banner} />
      <main className={styles.container}>
        <MovieDetails {...movie} />
      </main>
    </div>
  );
}
