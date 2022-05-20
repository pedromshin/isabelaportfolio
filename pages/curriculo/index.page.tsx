import type { NextPage } from "next";
import Head from "next/head";
import styles from "../Home.module.scss";

const Curriculo: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/avegra" rel="stylesheet" />
      </Head>

      <header className={styles.header}>isabela alves</header>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.divisor} />
          <div className={styles.linkWrapper}>
            <a href="/sobre-mim" className={styles.link}>
              sobre mim
            </a>
            <a href="/portfolio" className={styles.link}>
              portfolio
            </a>
            <a href="/curriculo" className={styles.link}>
              curriculo
            </a>
            <a href="/contato" className={styles.link}>
              contato
            </a>
          </div>
        </div>
        <footer className={styles.footer}>
          Isabela Alves, 2022 - Todos os direitos reservados ©
        </footer>
      </main>
    </>
  );
};

export default Curriculo;