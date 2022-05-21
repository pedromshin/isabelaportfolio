import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
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

      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>portfolio</h1>
          <span className={styles.description}>
            você pode ver muito mais no meu <strong>behance</strong>!
          </span>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Portfolio;
