import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Curriculo.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Curriculo: NextPage = () => {
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
          <h1 className={styles.title}>curriculo</h1>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Curriculo;
