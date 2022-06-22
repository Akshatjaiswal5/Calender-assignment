import React, { useContext } from "react";
import styles from "./WeekBar.module.css";
import GlobalContext from "../../context/global-context";
import DayBar from "./DayBar";
const WeekBar = (props) => {
  const ctx = useContext(GlobalContext);
  const weekarr = [];
  let startDate = new Date(ctx.currDate);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  return (
    <div className={styles.weekbar}>
      <div className={styles.cornerbar}></div>
      {ctx.currWeekArr.map((elem) => {
        return (
          <DayBar
            key={elem.day}
            day={elem.day}
            date={elem.date}
            month={elem.month}
            busy={elem.busy}
          />
        );
      })}
    </div>
  );
};

export default WeekBar;
