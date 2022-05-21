import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.scss";

import homePhoto from "../public/home_photo.jpg";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Home: NextPage = () => {
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
          <h1 className={styles.title}>quem sou eu?</h1>
          <div className={styles.image}>
            <Image src={homePhoto} alt="home page photo" layout="fixed" />
          </div>
          <p className={styles.description}>
            Oie!! Me chamo Isabela Alves, tenho 21 anos e sempre fui apaixonada
            por mídias digitais e criação artística. Desde os 12 anos tenho
            feito cursos de desenho, pintura, e, atualmente, graduação em Design
            Gráfico.
            <br />
            <br />
            Me interesso também por ferramentas tecnológicas profissionais de
            produção artística.
            <br />
            <br />
            Sou engajada em temas como feminismo, movimento LGBTQIA+ e outros
            temas de igualdade social.
            <br />
            <br />
            Se quiser saber mais sobre meu trabalho vá para a página de
            <strong> portifólio</strong>.
          </p>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
