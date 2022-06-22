import React from "react";
import styles from "./DayBar.module.css";

const DayBar = (props) => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(props.date).getDate();
  const day = week[new Date(props.date).getDay()];
  console.log(props.date);
  return (
    <div className={props.busy ? styles.busydaybar : styles.daybar}>
      <label className={styles.day}>{day}</label>
      <label className={styles.date}>{date}</label>
    </div>
  );
};

export default DayBar;
