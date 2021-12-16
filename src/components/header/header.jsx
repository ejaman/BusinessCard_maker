import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <header className={styles.header}>
    {props.onLogout && (
      <button className={styles.logout} onClick={props.onLogout}>
        Logout
      </button>
    )}
    <a href="https://github.com/ejaman/BusinessCard_maker " alt="git">
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
    </a>
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
);

export default Header;
