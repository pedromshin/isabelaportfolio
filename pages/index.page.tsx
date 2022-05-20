import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.scss";

import bannerPic1 from "./images/rect.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/avegra" rel="stylesheet" />
      </Head>

      <header className={styles.header}>isabela alves - home</header>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.linkWrapper}>
            <div className={styles.divisor} />
            <div className={styles.linkList}>
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
          <div className={styles.imageWrapper}>
            <div className={styles.image1}>
              <Image
                alt="banner image"
                src={bannerPic1}
                layout="fixed"
                width={350}
                height={440}
              />
            </div>
            <div className={styles.image2}>
              <Image
                alt="banner image"
                src={bannerPic1}
                layout="fixed"
                width={350}
                height={440}
              />
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          Isabela Alves, 2022 - Todos os direitos reservados ©
        </footer>
      </main>
    </>
  );
};

export default Home;