import React from "react";
import styles from "./Calender.module.css";
import TitleBar from "./TitleBar/TitleBar";
import WeekBar from "./WeekBar/WeekBar";
import CalenderBG from "./CalenderBG/CalenderBG";
import Appointments from "./Appointments/Appointments";

const Calender = (props) => {
  return (
    <div className={styles.main}>
      <TitleBar />
      <WeekBar />
      <CalenderBG />
      <Appointments />
    </div>
  );
};

export default Calender;
