import React from "react";
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
