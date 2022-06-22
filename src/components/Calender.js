import React from "react";
import styles from "./Calender.module.css";
import TitleBar from "./TitleBar/TitleBar";
import WeekBar from "./WeekBar/WeekBar";
import CalenderArea from "./CalenderArea/CalenderArea";

const Calender = (props) => {
  return (
    <div className={styles.main}>
      <TitleBar />
      <WeekBar />
      <CalenderArea />
    </div>
  );
};

export default Calender;
