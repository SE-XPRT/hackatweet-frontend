import styles from "../styles/Tweet.module.css";
import Leftside from "./Leftside";
import MiddleSide from "./Middleside";
import RightSide from "./Rightside";

function Tweet() {
  return (
    <div className={styles.page}>
      <Leftside style={{width: "20%"}} />
      <MiddleSide style={{width: "55%"}} />
      <RightSide style={{width: "25%"}} />
    </div>
  );
}

export default Tweet;
