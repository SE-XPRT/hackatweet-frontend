import styles from "../styles/Trend.module.css";

function Trend(props) {
  return (
    <div className={styles.page}>
      <div className={styles.trend}>
        <h4 className={styles.h4}>{props.content}</h4>
        <div className={styles.nbrTweets}>{props.count} Tweets</div>
      </div>
    </div>
  );
}

export default Trend;
