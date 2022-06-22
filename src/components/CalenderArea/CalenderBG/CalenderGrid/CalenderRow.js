import React from "react";
import styles from "./CalenderRow.module.css";
import CalenderElem from "./CalenderElem";
const CalenderRow = (props) => {
  return (
    <div className={styles.calrow}>
      {[...Array(48).keys()].map((elem) => {
        return <CalenderElem key={elem} />;
      })}
    </div>
  );
};

export default CalenderRow;
