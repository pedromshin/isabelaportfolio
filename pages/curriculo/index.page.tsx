import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Curriculo.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FullSVG from "../images/full_bar.svg";
import HalfSVG from "../images/half_bar.svg";

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
        <section className={styles.content}>
          <h1 className={styles.title}>currículo</h1>
          <ul className={styles.curriculum}>
            <li className={styles.curriculumSection}>
              <span className={styles.curriculumSectionTitle}>
                Formação acadêmica
              </span>
              <div className={styles.divisor} />
              <ul className={styles.firstCurriculumSection}>
                <li>
                  <p className={styles.firstCurriculumItemDescription}>
                    2019 - 2021 (não concluído) •
                    <strong>
                      {" "}
                      Universidade Federal Rural do Rio de Janeiro
                    </strong>
                    : Graduação em Hotelaria
                  </p>
                </li>
                <li>
                  <p className={styles.firstCurriculumItemDescription}>
                    2021 - 2023 •{" "}
                    <strong> Universidade Veiga de Almeida</strong>: Graduação
                    em Design Gráfico
                  </p>
                </li>
              </ul>
            </li>
            <li className={styles.curriculumSection}>
              <span className={styles.curriculumSectionTitle}>Experiência</span>
              <div className={styles.divisor} />
              <ul className={styles.secondCurriculumSection}>
                <li className={styles.secondCurriculumItem}>
                  <span>• Capas de livros</span>
                  <span className={styles.secondCurriculumItemDescription}>
                    Design e ilustração de duas capas de livros publicados;
                  </span>
                </li>
                <li className={styles.secondCurriculumItem}>
                  <span className={styles.curriculumItemDescription}>
                    • Logomarca de uma empresa de construção civil
                  </span>
                  <span className={styles.secondCurriculumItemDescription}>
                    Criação da logo da empresa e design da identidade visual;
                  </span>
                </li>
                <li className={styles.secondCurriculumItem}>
                  <span className={styles.curriculumItemDescription}>
                    • Ilustrações para um livro
                  </span>
                  <span className={styles.secondCurriculumItemDescription}>
                    Criação de mini-posters e marcadores de página de
                    personagens utilizando a ferramenta digital Photoshop para
                    um livro a ser publicado;{" "}
                  </span>
                </li>
                <li className={styles.secondCurriculumItem}>
                  <span className={styles.curriculumItemDescription}>
                    • Layout de website com criações próprias
                  </span>
                  <span className={styles.secondCurriculumItemDescription}>
                    Design de telas para um Website ainda não publicado,
                    utilizando o Illustrator para a criação de ilustrações e o
                    Figma para editar o projeto para o navegador web.{" "}
                  </span>
                </li>
              </ul>
            </li>
            <li className={styles.curriculumSection}>
              <span className={styles.curriculumSectionTitle}>Habilidades</span>
              <div className={styles.divisor} />
              <table className={styles.thirdCurriculumSection}>
                <thead>
                  <tr className={styles.tableHeadRow}>
                    <th className={styles.tableHeadItem}>Pacote Adobe</th>
                    <th className={styles.tableHeadItem}>Pacote Microsoft</th>
                    <th className={styles.tableHeadItem}>Figma</th>
                    <th className={styles.tableHeadItem}>Línguas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.tableData}>
                      <strong>• Photoshop</strong> Avançado
                    </td>
                    <td className={styles.tableData}>Avançado</td>
                    <td className={styles.tableData}>Intermediário</td>
                    <td className={styles.tableData}>
                      <strong>• Inglês</strong> Avançado
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.tableData}>
                      <strong>• Illustrator</strong> Avançado
                    </td>
                    <td className={styles.tableData}></td>
                    <td className={styles.tableData}></td>
                    <td className={styles.tableData}>
                      <strong>• Espanhol</strong> Intermediário
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.tableData}>
                      <strong>• After Effects</strong> Intermediário
                    </td>
                    <td className={styles.tableData}></td>
                    <td className={styles.tableData}></td>
                    <td className={styles.tableData}></td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Curriculo;
