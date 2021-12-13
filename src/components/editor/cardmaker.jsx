import React from "react";
import Makeform from "../makeForm/makeForm";
import styles from "./cardmaker.module.css";
const CardMaker = ({ cards }) => {
  return (
    <section className={styles.cardmaker}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <Makeform card={card} />
      ))}
    </section>
  );
};

export default CardMaker;
