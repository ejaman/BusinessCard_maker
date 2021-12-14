import React from "react";
import Btn from "../btn/btn";
import ImgFile from "../imgFile/imgFile";
import styles from "./makeForm.module.css";

const Makeform = ({ card }) => {
  const { name, company, theme, email, title, message, file, fileURL } = card;
  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      ></input>
      <select className={styles.theme} name="theme" value={theme}>
        <option value="Dark">Dark</option>
        <option value="Light">Light</option>
        <option value="Color">Color</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
      ></input>
      <textarea
        className={styles.msg}
        name="message"
        value={message}
      ></textarea>
      <section className={styles.btns}>
        <ImgFile />
        <Btn name="Delete" onClick={onSubmit} />
      </section>
    </form>
  );
};

export default Makeform;
