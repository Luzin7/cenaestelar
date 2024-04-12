import Image from "next/image";
import styles from "./backdrop.module.css";

interface BackdropProps {
  backdrop: string;
}

export function Backdrop({ backdrop }: BackdropProps) {
  return (
    <div className={styles.backdrop_container}>
      <div className={styles.backdrop_content__container}>
        <Image
          src={`https://image.tmdb.org/t/p/original${backdrop}`}
          alt="backdrop"
          fill
        />
      </div>
    </div>
  );
}
