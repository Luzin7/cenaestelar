import { getYearByTimezone } from "@/functions/getYearByTimezone";
import { ContentProps } from "@/types/content";
import Rating from "../Rating";
import styles from "./movieDetails.module.css";

export function MovieDetails({
  description,
  rating,
  releaseDate,
  shortDescription,
  title,
  globalRating,
}: Omit<
  ContentProps,
  "banner" | "id" | "poster" | "cast" | "directors" | "media" | "genres"
>) {
  return (
    <main className={styles.article_content__container}>
      <article className={styles.movie_article__container}>
        <div className={styles.article_header}>
          <h1>
            {title} - <span>{getYearByTimezone(releaseDate)}</span>
          </h1>
          <p>{shortDescription}</p>
        </div>
        <p className={styles.article_body__content}>{description}</p>
        <div className={styles.content_rating}>
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
  );
}
