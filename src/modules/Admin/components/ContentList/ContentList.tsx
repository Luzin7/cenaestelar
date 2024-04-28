"use client";

import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { useRecommendationStore } from "@/store/recommendation";
import { TmdbGeneralContentProps } from "@/types/tmdb";
import Image from "next/image";
import { useState } from "react";
import RecommendationModal from "../RecommendationModal";
import styles from "./contentList.module.css";

export function ContentList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoading, setIsLoading } = useLoading();
  const { isModalOpen, setIsModalOpen } = useModal();
  const { content } = useRecommendationStore();
  const [fodase, setFodase] = useState<TmdbGeneralContentProps>(
    {} as TmdbGeneralContentProps,
  );

  return (
    <>
      <RecommendationModal
        data={fodase}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        title="Rolas duras"
      />
      <div className={styles.container}>
        {content &&
          content.map((item) => (
            <div key={item.id} className={styles.content_wrapper}>
              {item.poster_path !== null ? (
                <div
                  onClick={() =>
                    isLoading === false
                      ? (() => {
                          setFodase(item);
                          setIsModalOpen((prevState) => !prevState);
                        })()
                      : null
                  }
                >
                  <p>{isLoading ? "Aguarde" : "Recomendar"} </p>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="sss"
                    width={500}
                    height={500}
                  />
                </div>
              ) : (
                <div
                  onClick={() =>
                    isLoading === false
                      ? setIsModalOpen((prevState) => !prevState)
                      : null
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
    </>
  );
}
