"use client";

import { useUserStore } from "@/store/user";
import { localPaths } from "@/utils/localPaths";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import styles from "./userIcon.module.css";

export function UserIcon() {
  const { userState } = useUserStore();

  return (
    <>
      {userState.user.isLoggedIn ? (
        <div
          className={styles.icon_container}
          style={{
            cursor: "pointer",
          }}
        >
          <FaUser />
        </div>
      ) : (
        <Link href={localPaths.SIGNIN}>
          <div className={styles.icon_container}>
            <FaUser />
          </div>
        </Link>
      )}
    </>
  );
}
