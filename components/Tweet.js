import styles from "../styles/Tweet.module.css";
import Leftside from "./Leftside";
import MiddleSide from "./Middleside";
import RightSide from "./RightSide";

function Tweet() {
  return (
    <div className={styles.page}>
      <Leftside style={{width: "20%"}} />
      <MiddleSide style={{width: "55%"}} />
      <RightSide style={{width: "20%"}} />
    </div>
  );
}

export default Tweet;
