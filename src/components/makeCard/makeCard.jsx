import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import CardMaker from "../editor/cardmaker";
import Preview from "../preview/Preview";
import styles from "./makeCard.module.css";

const MakeCard = ({ FileInput, authService, cardRepo }) => {
  const location = useLocation();
  const locationState = location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(locationState && locationState.id);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepo.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);

  // login
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
        console.log(userId);
      } else {
        navigate("/");
      }
    });
  });

  //
  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepo.saveCard(userId, card);
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
          //
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
