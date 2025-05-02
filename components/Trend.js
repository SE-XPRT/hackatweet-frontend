import { ST } from "next/dist/shared/lib/utils";
import styles from "../styles/Trend.module.css";

function Trend() {
  return (
    <div className={styles.page}>
      <div className={styles.trend}>
        <h4 className={styles.h4}>#hackatweet</h4>
        <div className={styles.nbrTweets}>2 Tweets</div>
      </div>
    </div>
  );
}

export default Trend;
