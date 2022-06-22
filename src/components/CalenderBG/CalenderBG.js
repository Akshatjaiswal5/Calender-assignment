import React from "react";
import styles from "./CalenderBG.module.css";
import TimeBars from "./TimeBars/TimeBars";
import CalenderGrid from "./CalenderGrid/CalenderGrid";

const CalenderBG = (props) => {
  return (
    <div>
      <TimeBars />
      <CalenderGrid />
    </div>
  );
};

export default CalenderBG;
