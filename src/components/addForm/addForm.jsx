import React, { useRef, useState } from "react";
import Btn from "../btn/btn";
import styles from "./addForm.module.css";

const AddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ file: null, fileURL: null });

  const onFileChange = (file) => {
    console.log(file);
    setFile({
      file: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      file: file.file || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset(); // 사용자가 입력해서 제출하고 나면 폼이 리셋되도록
    setFile({ file: null, fileURL: null });
    onAdd(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
      ></input>
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="company"
      ></input>
      <select
        ref={themeRef}
        className={styles.theme}
        name="theme"
        placeholder="theme"
      >
        <option placeholder="Dark">Dark</option>
        <option placeholder="Light">Light</option>
        <option placeholder="Color">Color</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="title"
      ></input>
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="email"
      ></input>
      <textarea
        ref={messageRef}
        className={styles.msg}
        name="message"
        placeholder="message"
      ></textarea>
      <section className={styles.btns}>
        <FileInput name={file.file} onFileChange={onFileChange} />
        <Btn name="Add" onClick={onSubmit} />
      </section>
    </form>
  );
};
export default AddForm;
