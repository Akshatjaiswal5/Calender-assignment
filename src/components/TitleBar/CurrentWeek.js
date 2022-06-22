import React, { useContext } from "react";
import styles from "./CurrentWeek.module.css";
import GlobalContext from "../../context/global-context";
const CurrentWeek = (props) => {
  const ctx = useContext(GlobalContext);
  const startDate = new Date(ctx.currWeekArr[0]);
  const endDate = new Date(ctx.currWeekArr[6]);

  return (
    <div className={styles.date}>
      {startDate.getDate()}{" "}
      {startDate.toLocaleString("en-us", { month: "short" })} to{" "}
      {endDate.getDate()} {endDate.toLocaleString("en-us", { month: "short" })}
    </div>
  );
};

export default CurrentWeek;
