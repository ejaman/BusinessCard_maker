import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/default_profile.png";
const Card = ({ card }) => {
  const { name, company, theme, email, title, message, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.img} src={url} alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={`${styles.company} ${getStyles(theme)}`}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.msg}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "Dark":
      return styles.dark;
    case "Light":
      return styles.light;
    case "Color":
      return styles.color;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
