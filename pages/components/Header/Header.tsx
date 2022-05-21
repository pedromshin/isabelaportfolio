import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.title}>isabela alves </span>
      <span className={styles.links}>
        <a href="/" className={styles.link}>
          home{" "}
        </a>
        <a href="/portfolio" className={styles.link}>
          portfolio{" "}
        </a>
        <a href="/curriculo" className={styles.link}>
          curriculo{" "}
        </a>
        <a href="/contato" className={styles.link}>
          contato{" "}
        </a>
      </span>
    </header>
  );
}

export default Header;
