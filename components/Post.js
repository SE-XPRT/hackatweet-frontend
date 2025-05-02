import styles from "../styles/Post.module.css";
import Image from "next/image";

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
        John <span>@John Cena - a few seconds</span>
      </div>
      <div className={styles.content}>YOU CAN'T SEE ME ! #cenation</div>
    </div>
  );
}

export default Post;