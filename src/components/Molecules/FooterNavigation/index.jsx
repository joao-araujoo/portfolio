import AnchorLink from "../../Atoms/AnchorLink";
import styles from "./styles.module.css";
import { FaGithub, FaLinkedin, FaInstagram, FaSpotify } from "react-icons/fa";

export default function FooterNavigation() {
  return (
    <nav>
      <div className={styles.wrapper}>
        <AnchorLink path="https://github.com/joao-araujoo">
          <FaGithub color="#c6c6c6" />
        </AnchorLink>
        <AnchorLink path="https://www.linkedin.com/in/joao-araujoo/">
          <FaLinkedin color="#c6c6c6" />
        </AnchorLink>
        <AnchorLink path="https://www.instagram.com/joao.araujoo_/">
          <FaInstagram color="#c6c6c6" />
        </AnchorLink>
        <AnchorLink path="https://open.spotify.com/user/uxb66upc7ekxdup54a4frat8e?si=992f8ee8344f4d95">
          <FaSpotify color="#c6c6c6" />
        </AnchorLink>
      </div>
    </nav>
  );
}
