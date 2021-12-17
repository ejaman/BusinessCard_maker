import React from "react";
import Btn from "../btn/btn";
import styles from "./makeForm.module.css";

const Makeform = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, theme, email, title, message, file } = card;

  const onFileChange = (file) => {
    updateCard({ ...card, file: file.name, fileURL: file.url });
  };

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
        value={name}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      ></input>
      <select
        className={styles.theme}
        name="theme"
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
        value={title}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      ></input>
      <textarea
        className={styles.msg}
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>
      <section className={styles.btns}>
        <FileInput name={file} onFileChange={onFileChange} />
        <Btn name="Delete" onClick={onSubmit} />
      </section>
    </form>
  );
};

export default Makeform;
