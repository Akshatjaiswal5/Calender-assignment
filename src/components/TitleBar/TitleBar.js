import React from "react";
import CurrentWeek from "./CurrentWeek";
import Navigation from "./Navigation";
import NewAppointment from "./NewAppointment";
import styles from "./TitleBar.module.css";

const TitleBar = (props) => {
  return (
    <div className={styles.main}>
      <NewAppointment />
      <label>Timeline</label>
      <CurrentWeek />
      <Navigation />
    </div>
  );
};

export default TitleBar;
