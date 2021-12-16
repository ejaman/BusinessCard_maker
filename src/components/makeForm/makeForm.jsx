import React, { useCallback, useRef } from "react";
import Btn from "../btn/btn";
import ImgFile from "../imgFile/imgFile";
import styles from "./makeForm.module.css";

const Makeform = ({ card, updateCard, deleteCard }) => {
  const { name, company, theme, email, title, message, file, fileURL } = card;
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onChange = (event) => {
    console.log("change");
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const onSubmit = () => {
    deleteCard(card);
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        ref={nameRef}
        value={name}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={companyRef}
        value={company}
        onChange={onChange}
      ></input>
      <select
        className={styles.theme}
        name="theme"
        ref={themeRef}
        value={theme}
        onChange={onChange}
      >
        <option value="Dark">Dark</option>
        <option value="Light">Light</option>
        <option value="Color">Color</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        ref={titleRef}
        value={title}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="email"
        ref={emailRef}
        value={email}
        onChange={onChange}
      ></input>
      <textarea
        className={styles.msg}
        name="message"
        ref={messageRef}
        value={message}
        onChange={onChange}
      ></textarea>
      <section className={styles.btns}>
        <ImgFile />
        <Btn name="Delete" onClick={onSubmit} />
      </section>
    </form>
  );
};

export default Makeform;
