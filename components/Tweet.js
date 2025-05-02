import styles from "../styles/Tweet.module.css";
import Leftside from "./Leftside";
import MiddleSide from "./Middleside";
import RightSide from "./RightSide";

function Tweet() {
  return (
    <div className={styles.page}>
      <Leftside />
      <MiddleSide />
      <RightSide />
    </div>
  );
}

export default Tweet;
