import { localPaths } from "@/utils/localPaths";
import Link from "next/link";
import { TfiSearch } from "react-icons/tfi";
import HeaderLogo from "./components/HeaderLogo";
import { NavigationLinks } from "./components/NavigationLinks/NavigationLinks";
import UserIcon from "./components/UserIcon";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header_container}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <HeaderLogo />
        <NavigationLinks />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Link href={localPaths.SEARCH}>
          <TfiSearch
            style={{
              fill: "var(--accent)",
              fontSize: "1.4rem",
            }}
          />
        </Link>
        <UserIcon />
      </div>
    </header>
  );
}
