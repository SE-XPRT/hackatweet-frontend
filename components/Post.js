import styles from "../styles/Post.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Post({ id, username, firstname, content, handleDelete }) {
  const user = useSelector((state) => state.user.value);

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
          <strong>{firstname}</strong>
          <span className={styles.grayText}>
            @{username} - a few seconds ago
          </span>
        </div>
      </div>
      <div className={styles.content}>
        {content}
        <FontAwesomeIcon className={styles.heart} icon={faHeart} />
        {username === user.username && (
          <FontAwesomeIcon
            className={styles.trash}
            icon={faTrashCan}
            onClick={() => handleDelete(id)}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
}

export default Post;
