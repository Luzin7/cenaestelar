import { externalPaths } from "@/utils/externalPaths";
import { localPaths } from "@/utils/localPaths";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer_container}>
      <a href={localPaths.ABOUT}>Sobre</a>
      <a href={externalPaths.PORTOFLIO} target="_blank" rel="noreferrer">
        Entre em contato
      </a>
    </footer>
  );
}
