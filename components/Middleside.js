import styles from "../styles/Middleside.module.css";
import { useState } from "react";
import Post from "./Post";

function Middleside(props) {
  const [message, setMessage] = useState("");

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
          <button className={styles.button}>
            <strong>Tweet</strong>
          </button>
        </div>
      </div>

      <Post />
    </div>
  );
}

export default Middleside;
