import React from "react";
import styles from "./DayBar.module.css";

const DayBar = (props) => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className={styles.daybar}>
      <label className={styles.day}>{week[props.day]}</label>
      <label className={styles.date}>{props.date}</label>
    </div>
  );
};

export default DayBar;
