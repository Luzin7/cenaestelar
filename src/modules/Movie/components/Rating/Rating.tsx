import Image from "next/image";
import styles from "./rating.module.css";

export function Rating({ title, rating }: { title: string; rating: number }) {
  return (
    <div className={styles.container}>
      <p>{title}:</p>
      {Array.from({ length: rating }).map((_, index) => (
        <Image
          key={index}
          src="/ratingIcon.png"
          width={50}
          height={50}
          alt="Ryan Gosling sorrindo"
        />
      ))}
    </div>
  );
}
