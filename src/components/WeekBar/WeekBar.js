import React, { useContext } from "react";
import styles from "./WeekBar.module.css";
import GlobalContext from "../../context/global-context";
import DayBar from "./DayBar";
const WeekBar = (props) => {
  const ctx = useContext(GlobalContext);
  let startDate = new Date(ctx.currDate);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  return (
    <div className={styles.weekbar}>
      <div className={styles.cornerbar}></div>
      {ctx.currWeekArr.map((elem) => {
        return (
          <DayBar
            key={Math.random().toString()}
            date={elem}
            busy={ctx.appointments.hasOwnProperty(elem)}
          />
        );
      })}
    </div>
  );
};

export default WeekBar;
