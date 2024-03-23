import { ContentProps } from "@/types/content";
import styles from "./movieDetails.module.css";

export function MovieDetails({
  description,
  rating,
  releaseDate,
  shortDescription,
  title,
}: Omit<
  ContentProps,
  "banner" | "id" | "poster" | "cast" | "directors" | "media" | "genres"
>) {
  return (
    <main className={styles.article_content__container}>
      <article className={styles.movie_article__container}>
        <div className={styles.article_header}>
          <h1>
            {title} - <span>{releaseDate}</span>
          </h1>
          <p>{shortDescription}</p>
        </div>
        <p className={styles.article_body__content}>{description}</p>
        <div className={styles.content_rating}>
          <span>Avaliação média: {rating}</span>
        </div>
      </article>
    </main>
  );
}
