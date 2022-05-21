import styles from "./Footer.module.scss";

import LinkedinSVG from "../../images/linkedin.svg";
import BehanceSVG from "../../images/behance.svg";
import InstagramSVG from "../../images/instagram.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialButtonWrapper}>
        <a href="https://www.linkedin.com/in/isabela-alves-244606214/">
          <LinkedinSVG className={styles.socialButton} />
        </a>
        <a href="https://www.behance.net/isabelalvesz">
          <BehanceSVG className={styles.socialButton} />
        </a>
        <a href="/">
          <InstagramSVG className={styles.socialButton} />
        </a>
      </div>
      <span className={styles.legalText}>
        Isabela Alves, 2022 - Todos os direitos reservados ©
      </span>
    </footer>
  );
}

export default Footer;
