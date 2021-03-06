import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "./Contato.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import profilePic from "./images/profile.jpg";
import BehanceSVG from "./images/behance.svg";
import InstagramSVG from "./images/instagram.svg";
import LinkedinSVG from "./images/linkedin.svg";
import BackgroundLines from "./images/background_lines.svg";

const Contato: NextPage = () => {
  const inputNameClass = [styles.input, styles.inputName].join(" ");
  const inputEmailClass = [styles.input, styles.inputEmail].join(" ");

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
          <h1 className={styles.title}>se quiser falar comigo:</h1>
          <form action="" method="get" className={styles.form}>
            <label htmlFor="nome" className={styles.label}>
              seu nome:
            </label>
            <br />
            <input
              type="text"
              name="nome"
              id="nome"
              className={inputNameClass}
            />
            <br />
            <label className={styles.label}>
              seu email:
              <br />
              <input
                type="email"
                name="email"
                id="email"
                className={inputEmailClass}
              />
            </label>
            <br />
            <label className={styles.label}>
              sua mensagem:
              <br />
              <input
                type="text"
                name="assunto"
                id="assunto"
                className={styles.input}
              />
            </label>
            <br />
            <button type="submit" className={styles.submitButton}>
              <strong>enviar</strong>
            </button>
          </form>
          <h1 className={styles.title}>me siga nas redes sociais</h1>
          <Image
            src={profilePic}
            alt="profile pic"
            layout="fixed"
            width={345}
            height={482}
          />
          <div className={styles.social}>
            <a
              className={styles.socialButton}
              href="https://www.linkedin.com/in/isabela-alves-244606214/"
            >
              <LinkedinSVG className={styles.socialIcon} />
            </a>
            <a
              className={styles.socialButton}
              href="https://www.behance.net/isabelalvesz"
            >
              <BehanceSVG />
            </a>
            <a
              className={styles.socialButton}
              href="https://www.instagram.com/lisartisy/?igshid=YmMyMTA2M2Y="
            >
              <InstagramSVG className={styles.instagramSVG} />
            </a>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contato;
