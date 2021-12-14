import React from "react";
import AddForm from "../addForm/addForm";
import Makeform from "../makeForm/makeForm";
import styles from "./cardmaker.module.css";
const CardMaker = ({ cards, addCard }) => {
  return (
    <section className={styles.cardmaker}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.forms}>
        {cards.map((card) => (
          <Makeform key={card.id} card={card} />
        ))}
        <AddForm onAdd={addCard} />
      </ul>
    </section>
  );
};

export default CardMaker;
