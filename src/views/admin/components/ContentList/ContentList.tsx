"use client";

import { useLoading } from "@/hooks/useLoading";
import { addMovie } from "@/services/cenaestelarApi";
import { useRecommendationStore } from "@/store/recommendation";
import Image from "next/image";
import styles from "./contentList.module.css";

export function ContentList() {
  const { isLoading, setIsLoading } = useLoading();
  const { content } = useRecommendationStore();

  const handleRecommend = async (id: number) => {
    setIsLoading((prevState) => !prevState);

    try {
      await addMovie(id);
      setIsLoading((prevState) => !prevState);
    } catch (error) {
      setIsLoading((prevState) => !prevState);
      throw new Error("Não foi possível recomendar!", error as ErrorOptions);
    }
  };

  return (
    <div className={styles.container}>
      {content &&
        content.map((content) => (
          <div key={content.id} className={styles.content_wrapper}>
            {content.poster_path !== null ? (
              <div
                onClick={() =>
                  isLoading === false ? handleRecommend(content.id) : null
                }
              >
                <p>{isLoading ? "Aguarde" : "Recomendar"} </p>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${content.poster_path}`}
                  alt="sss"
                  width={500}
                  height={500}
                />
              </div>
            ) : (
              <div
                onClick={() =>
                  isLoading === false ? handleRecommend(content.id) : null
                }
              >
                <p>{isLoading ? "Aguarde" : "Recomendar"} </p>
                <Image
                  src="https://th.bing.com/th/id/OIP.Ar9SK2TemsrqK7vTus1BLgHaKT?rs=1&pid=ImgDetMain"
                  alt="sss"
                  width={500}
                  height={500}
                />
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
