import { localPaths } from "@/utils/localPaths";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import styles from "./userIcon.module.css";

export function UserIcon() {
  return (
    <Link href={localPaths.SIGNIN}>
      <div className={styles.icon_container}>
        <FaUser />
      </div>
    </Link>
  );
}
