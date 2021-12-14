import React from "react";
import styles from "./btn.module.css";

const Btn = ({ name, onClick }) => (
  <button className={styles.btn} onClick={onClick}>
    {name}
  </button>
);

export default Btn;
