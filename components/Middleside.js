import styles from "../styles/Middleside.module.css";
import { useState } from "react";
import { addTrendingHashtags } from "../reducers/hashtags";
import { useDispatch } from "react-redux";
import Post from "./Post";

function Middleside(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const getHashtagswords = (text) => {
    const hashtags = text.match(/#\w+/g);
    dispatch(addTrendingHashtags(hashtags));
  };

  return (
    <div className={styles.page} style={props.style}>
      <div className={styles.top}>
        <h1 className={styles.h1}>Home</h1>
        <textarea
          className={styles.input}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="What's up"
          value={message}
        />
        <div className={styles.underInput}>
          {message.length}/200
          <button
            onClick={() => getHashtagswords(message)}
            className={styles.button}
          >
            <strong>Tweet</strong>
          </button>
        </div>
      </div>

      <Post />
    </div>
  );
}

export default Middleside;
