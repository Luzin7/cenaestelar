import HeaderIcon from "./components/HeaderIcon";
import { NavigationLinks } from "./components/NavigationLinks/NavigationLinks";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header_container}>
      <HeaderIcon />
      <NavigationLinks />
      <HeaderIcon />
    </header>
  );
}
