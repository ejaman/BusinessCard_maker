import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import CardMaker from "../editor/cardmaker";
import Preview from "../preview/Preview";
import styles from "./makeCard.module.css";

const MakeCard = ({ authService }) => {
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
  return (
    <section className={styles.cardmaker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <CardMaker />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default MakeCard;
