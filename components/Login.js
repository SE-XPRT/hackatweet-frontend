import styles from "../styles/Home.module.css";

import { useState } from "react";
import Image from "next/image";
import Link from "next/Link";
import Signup from "./Signup";
import Signin from "./Signin";

function Login() {
  const [hidden, setHidden] = useState(true);

  const signUpClick = () => {
    setHidden((prevState) => !prevState); // affiche la modale
  };
  const [hiddenLog, setHiddenLog] = useState(true);

  const signInClick = () => {
    setHiddenLog((prevState) => !prevState); // affiche la modale
  };
  return (
    <div className={styles.main}>
      <header className={styles.header}>header</header>

      <main className={styles.rightContent}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="logo de l'application"
            width={70}
            height={70}
          />
        </div>

        <h1 className={styles.h1}>See what's happening</h1>
        <h2 className={styles.h2}>Join hackatweet today</h2>
        <div style={{ display: hidden ? "none" : "block" }}>
          <Signup />
        </div>
        <div style={{ display: hiddenLog ? "none" : "block" }}>
          <Signin />
        </div>
        <button
          className={styles.Button1}
          type="button"
          onClick={() => signUpClick()}
        >
          Sign up
        </button>
        <Link className={styles.linkWhite} href="/login">
          Already have account
        </Link>
        <button
          className={styles.Button2}
          type="button"
          onClick={() => signInClick()}
        >
          Sign in
        </button>
      </main>
    </div>
  );
}

export default Login;
