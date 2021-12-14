import React from "react";
import styles from "./makeForm.module.css";

const Makeform = ({ card }) => {
  const { name, company, theme, email, title, message, file, fileURL } = card;

  return (
    <form className={styles.form}>
      <section className={styles.row1}>
        <input
          className={styles.name}
          type="text"
          name="name"
          value={name}
        ></input>
        <input
          className={styles.company}
          type="text"
          name="company"
          value={company}
        ></input>
        <input
          className={styles.theme}
          type="text"
          name="theme"
          value={theme}
        ></input>
      </section>
      <section className={styles.row2}>
        <input
          className={styles.title}
          type="text"
          name="title"
          value={title}
        ></input>
        <input
          className={styles.email}
          type="text"
          name="email"
          value={email}
        ></input>
      </section>
      <section className={styles.row3}>
        <input
          className={styles.msg}
          type="text"
          name="message"
          value={message}
        ></input>
      </section>
      <section className={styles.btns}>
        <button className={styles.fileBtn}>{file}</button>
        <button className={styles.deleteBtn}>delete</button>
      </section>
    </form>
  );
};

export default Makeform;
