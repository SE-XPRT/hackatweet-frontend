import styles from "../styles/Rightside.module.css";
import Trend from "./Trend"

function RightSide(props) {
  return (
    <div className={styles.page} style={props.style}>
      <div><h1 className={styles.h1}>Trends</h1></div>
      <div>
        <Trend />
      </div>
    </div>
  );
}

export default RightSide;
