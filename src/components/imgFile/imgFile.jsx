import React, { useRef } from "react";
import styles from "./imgFile.module.css";

const ImgFile = ({ imgUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onBtnClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    console.log(event.target.files[0]);
    const uploaded = await imgUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.imgBtn} onClick={onBtnClick}>
        {name || "no file"}
      </button>
    </div>
  );
};

export default ImgFile;
