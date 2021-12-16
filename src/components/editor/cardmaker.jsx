import React from "react";
import AddForm from "../addForm/addForm";
import Makeform from "../makeForm/makeForm";
import styles from "./cardmaker.module.css";
const CardMaker = ({ cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.cardmaker}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.forms}>
        {Object.keys(cards).map((key) => (
          <Makeform
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        ))}
        <AddForm onAdd={addCard} />
      </ul>
    </section>
  );
};

export default CardMaker;
