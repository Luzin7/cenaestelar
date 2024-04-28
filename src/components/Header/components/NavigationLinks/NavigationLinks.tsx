import { localPaths } from "@/utils/localPaths";
import Link from "next/link";
import styles from "./nav.module.css";

export function NavigationLinks() {
  return (
    <nav className={styles.nav_container}>
      <ul className={styles.ul_container}>
        <li>
          <Link href={localPaths.HOME}>Início</Link>
        </li>
        <li>
          <Link href={localPaths.MOVIES}>Filmes</Link>
        </li>
        {/* <li>
          <Link href={localPaths.SERIES}>Séries</Link>
        </li>
        <li>
          <Link href={localPaths.CATEGORIES}>Categorias</Link>
        </li> */}
      </ul>
    </nav>
  );
}
