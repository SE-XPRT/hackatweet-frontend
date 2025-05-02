import styles from "../styles/Leftside.module.css";
import Image from "next/image";

function Leftside(props) {
  return (
    <div className={styles.page} style={props.style}>
      <span>
        <Image
          src="/white-logo.png"
          className={styles.logo}
          alt="logo"
          width={50}
          height={50}
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
          <span>John</span>
          <span>@John Cena</span>
        </div>
      </div>
    </div>
  );
}

export default Leftside;
