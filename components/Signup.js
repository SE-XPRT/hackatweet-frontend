import Image from "next/image";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(firstname);
  const [showModal, setShowModal] = useState(false);

  const signUpClick = () => {
    setShowModal((prevState) => !prevState);
    console.log("ok" + showModal);
  };

  return (
    <div
      className={styles.Modal}
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
        <h2>Create your hackatweet account</h2>
        <input
          className={styles.inputs}
          type="text"
          placeholder="Firstname"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          className={styles.inputs}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.inputs}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.SubSgnup} type="submit">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
