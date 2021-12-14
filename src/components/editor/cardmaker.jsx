import React from "react";
import Makeform from "../makeForm/makeForm";
import styles from "./cardmaker.module.css";
const CardMaker = ({ cards }) => {
  return (
    <section className={styles.cardmaker}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.forms}>
        {cards.map((card) => (
          <Makeform card={card} />
        ))}
      </ul>
    </section>
  );
};

export default CardMaker;
