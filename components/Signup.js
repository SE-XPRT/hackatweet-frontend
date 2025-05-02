import { useEffect, useState } from "react";
import { login } from "../reducers/user";
import { useDispatch } from "react-redux";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Signup() {
  const dispacth = useDispatch();
  const router = useRouter();
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(firstname);
  const [showModal, setShowModal] = useState(false);

  const signUpClick = () => {
    setShowModal((prevState) => !prevState);
    console.log("ok" + showModal);
  };
  const registerClick = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        firstname: firstname,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        dispacth(login({ username: username, token: data.token }));
        if (data.result) {
          router.push("/homepage");
        }
        setShowModal(false);
      });
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
        <button
          className={styles.SubSgnup}
          type="submit"
          onClick={() => registerClick()}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
