import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./Portfolio.module.scss";
import BackgroundLines from "./background_lines.svg";

import Image from "next/image";

import { data } from "./data";

const Portfolio: NextPage = () => {
  const renderGridItem = () => {
    return data.map((item) => {
      return (
        <div className={styles.gridItem} key={item.id}>
          <Image
            src={item.image.src}
            alt={item.title}
            layout="fixed"
            width={item.image.width}
            height={item.image.height}
          />
          <div
            className={styles.gridItemTitle}
            style={{ maxWidth: item.image.width }}
          >
            {item.title}
          </div>
        </div>
      );
    });
  };

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
        <BackgroundLines className={styles.bgLines} />

        <section className={styles.content}>
          <h1 className={styles.title}>portfolio</h1>
          <span className={styles.description}>
            você pode ver muito mais no meu <strong>behance</strong>!
          </span>
          <div className={styles.itemsWrapper}>{renderGridItem()}</div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
