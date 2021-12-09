import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  const signInWithGoogle = () => {
    props.signInWithGoogle();
  };
  const signInWithGithub = () => {};
  return (
    <div>
      <div className={styles.card}>
        <h1>Business Card Maker</h1>
        <div className={styles.login}>
          <span>Login</span>
          <div className={styles.btn}>
            <button name="google" onClick={signInWithGoogle}>
              Google
            </button>
            <button onClick={signInWithGithub}>Github</button>
          </div>
        </div>
        <a title="git" href="https://github.com/ejaman">
          <span>check the code</span>
        </a>
      </div>
    </div>
  );
};

export default Login;
