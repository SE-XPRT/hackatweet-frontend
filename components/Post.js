import styles from "../styles/Post.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.userInfo}>
        <Image
          src="/egg.jpg"
          className={styles.egg}
          alt="Photo de profil"
          width={45}
          height={45}
        />
        <div>
          <strong>John </strong>
          <span className={styles.grayText}>@John Cena - a few seconds</span>
        </div>
      </div>
      <div className={styles.content}>
        YOU CAN'T SEE ME ! #cenation
        <FontAwesomeIcon className={styles.heart} icon={faHeart} />
      </div>
    </div>
  );
}

export default Post;
