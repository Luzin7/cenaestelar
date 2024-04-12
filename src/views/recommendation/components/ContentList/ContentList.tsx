"use client";

import { addToWishlist } from "@/services/firebase";
import { useRecommendationStore } from "@/store/recommendation";
import { useUserStore } from "@/store/user";
import Image from "next/image";
import styles from "./contentList.module.css";

export function ContentList() {
  const { userState } = useUserStore();
  const { content } = useRecommendationStore();

  const handleRecommend = async (id: number) => {
    const whoRecommend = {
      name: userState.user.displayName,
      email: userState.user.email,
      profilePhoto: userState.user.photoURL,
    };

    await addToWishlist(id, whoRecommend);
  };

  return (
    <div className={styles.container}>
      {content &&
        content.map((content) => (
          <div key={content.id} className={styles.content_wrapper}>
            {content.poster_path !== null ? (
              <div>
                <p>Recomendar</p>
                <Image
                  onClick={() => handleRecommend(content.id)}
                  src={`https://image.tmdb.org/t/p/w500${content.poster_path}`}
                  alt="sss"
                  width={500}
                  height={500}
                />
              </div>
            ) : (
              <Image
                onClick={() => handleRecommend(content.id)}
                src="https://tenor.com/bbSMz.gif"
                alt="sss"
                width={500}
                height={500}
              />
            )}
          </div>
        ))}
    </div>
  );
}
