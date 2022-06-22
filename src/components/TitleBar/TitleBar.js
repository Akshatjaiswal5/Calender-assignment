import React from "react";
import CurrentWeek from "./CurrentWeek";
import styles from "./TitleBar.module.css";

const TitleBar = (props) => {
  return (
    <div className={styles.main}>
      <label>Timeline</label>
      <CurrentWeek />
    </div>
  );
};

export default TitleBar;
