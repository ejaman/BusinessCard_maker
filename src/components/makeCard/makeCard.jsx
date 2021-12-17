import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import CardMaker from "../editor/cardmaker";
import Preview from "../preview/Preview";
import styles from "./makeCard.module.css";

const MakeCard = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "kitty",
      company: "samsung",
      theme: "Dark",
      email: "kitty@gmail.com",
      title: "developer",
      message: "coding👍",
      file: "files",
      fileURL: null,
    },
    2: {
      id: 2,
      name: "bunny",
      company: "samsung",
      theme: "Color",
      email: "bunny@gmail.com",
      title: "developer",
      message: "coding👍👍",
      file: "files",
      fileURL: null,
    },
    3: {
      id: 3,
      name: "pony",
      company: "samsung",
      theme: "Light",
      email: "pony@gmail.com",
      title: "developer",
      message: "coding👍👍👍",
      file: "files",
      fileURL: "files.png",
    },
  });

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    console.log(card);
    setCards((cards) => {
      const deleted = { ...cards };
      delete deleted[card.id];
      return deleted;
    });
  };

  return (
    <section className={styles.cardmaker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <CardMaker
          FileInput={FileInput}
          cards={cards}
          addCard={addOrUpdateCard}
          updateCard={addOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default MakeCard;
