import React from "react";
import styles from "./footer.module.css";
const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <a title="git" href="https://github.com/ejaman">
        <span>check the code</span>
      </a>
    </footer>
  );
};

export default Footer;
