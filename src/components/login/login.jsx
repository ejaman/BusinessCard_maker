import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goToMaker = (userId) => {
    navigate("/card", { state: { id: userId } });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    // user가 있다면 바로 로그인 건너뛰고 card로
    authService.onAuthChange((user) => {
      user && goToMaker(user.id);
    });
  });

  return (
    <section>
      <Header />
      <div className={styles.login}>
        <span>Login</span>
        <ul className={styles.list}>
          <li>
            <button className={styles.btn} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.btn} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
