import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Portfolio.module.scss";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/avegra" rel="stylesheet" />
      </Head>

      <header className={styles.header}>isabela alves - portfolio</header>
      <main className={styles.main}>
        <div className={styles.content}>
          <span>Portfolio</span>
        </div>
        <footer className={styles.footer}>
          Isabela Alves, 2022 - Todos os direitos reservados ©
        </footer>
      </main>
    </>
  );
};

export default Portfolio;
