import React from "react";
import styles from "./CalenderGrid.module.css";
import CalenderRow from "./CalenderRow";

const CalenderGrid = (props) => {
  return (
    <div className={styles.grid}>
      {[...Array(7).keys()].map((elem) => {
        return <CalenderRow key={elem} />;
      })}
    </div>
  );
};

export default CalenderGrid;
