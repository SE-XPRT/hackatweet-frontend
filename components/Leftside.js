import styles from "../styles/Leftside.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function Leftside(props) {
  const user = useSelector((state) => state.user.value);
  const router = useRouter();

  return (
    <div className={styles.page} style={props.style}>
      <span>
        <Image
          src="/white-logo.png"
          className={styles.logo}
          alt="logo"
          width={50}
          height={50}
          onClick={() => router.push("/")}
        />
      </span>
      <div className={styles.profilPart}>
        <Image
          src="/egg.jpg"
          className={styles.egg}
          alt="Photo de profil"
          width={40}
          height={35}
        />
        <div className={styles.userInfo}>
          <span>{user.username}</span>
          <span>@John Cena</span>
        </div>
      </div>
    </div>
  );
}

export default Leftside;
