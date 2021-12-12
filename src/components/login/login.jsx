import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then(console.log("login"));
  };
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
