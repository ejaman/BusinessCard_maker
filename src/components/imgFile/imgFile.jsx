import React, { useRef, useState } from "react";
import styles from "./imgFile.module.css";

const ImgFile = ({ imgUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onBtnClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imgUploader.upload(event.target.files[0]);
    setLoading(false);
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

      {!loading && (
        <button
          className={`${styles.imgBtn} ${name ? styles.haveImg : styles.noImg}`}
          onClick={onBtnClick}
        >
          {name || "no file"}
        </button>
      )}
      {loading && <div className={styles.loading}>Loading...</div>}
    </div>
  );
};

export default ImgFile;
