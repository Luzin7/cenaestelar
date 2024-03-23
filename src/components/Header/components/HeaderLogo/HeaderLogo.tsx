import { localPaths } from "@/utils/localPaths";
import Link from "next/link";
import { BsStars } from "react-icons/bs";
import styles from "./headerIcon.module.css";

export function HeaderLogo() {
  return (
    <Link href={localPaths.HOME}>
      <div className={styles.icon_container}>
        <BsStars />
      </div>
    </Link>
  );
}
