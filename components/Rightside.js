import styles from "../styles/Rightside.module.css";
import Trend from "./Trend";
import { useSelector } from "react-redux";

function RightSide(props) {
  const hashtags = useSelector((state) => state.hashtags.value);

  const hashtagCounts = {};
  hashtags.forEach((tag) => {
    hashtagCounts[tag] = (hashtagCounts[tag] || 0) + 1;
  });

  const allHashtags = Object.entries(hashtagCounts).map(([tag, count]) => (
    <Trend key={tag} content={tag} count={count} />
  ));

  return (
    <div className={styles.page} style={props.style}>
      <div>
        <h1 className={styles.h1}>Trends</h1>
      </div>
      <div className={styles.trends}>
        {allHashtags}
      </div>
    </div>
  );
}

export default RightSide;
