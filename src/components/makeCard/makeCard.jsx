import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import CardMaker from "../editor/cardmaker";
import Preview from "../preview/Preview";
import styles from "./makeCard.module.css";

const MakeCard = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);

  // handleIncrement = (habit) => {
  //   // habit.count++; state를 직접 변경하는 것은 좋지 않음
  //   const habits = this.state.habits.map((item) => {
  //     if (item.id === habit.id) {
  //       return { ...habit, count: habit.count + 0.5 };
  //     }
  //     return item;
  //   });
  //   this.setState({ habits: habits }); //{habits} 이렇게 써도 ㄱㅊ, key: value-local variable -> state.habits
  // };

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
        <CardMaker cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default MakeCard;
