import { useEffect, useState } from "react";
import { login } from "../reducers/user";
import { useDispatch } from "react-redux";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Signin() {
  const dispacth = useDispatch();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShowModal] = useState(false);

  const signUpClick = () => {
    setShowModal((prevState) => !prevState);
    console.log("ok" + showModal);
  };
  const signinClick = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        dispacth(login({ username: username, token: data.token }));
        if (data.token && username) {
          router.push("/homepage");
        }
        setShowModal(false);
      });
  };

  return (
    <div
      className={styles.ModalSignin}
      style={{ display: showModal ? "none" : "block" }}
    >
      <div className={styles.iconX} onClick={() => signUpClick()}>
        <FontAwesomeIcon icon={faXmark} />
      </div>

      <div className={styles.ContentModal}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="logo de l'application"
            width={70}
            height={70}
          />
        </div>
        <h2>Connect to Hackatweet</h2>

        <input
          className={styles.inputs}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          name={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.inputs}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={styles.SubSgnup}
          type="submit"
          onClick={() => signinClick()}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Signin;
