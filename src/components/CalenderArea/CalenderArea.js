import React from "react";
import styles from "./CalenderArea.module.css";
import CalenderBG from "./CalenderBG/CalenderBG";
import Appointments from "./Appointments/Appointments";

const CalenderArea = (props) => {
  return (
    <div>
      <CalenderBG />
      <Appointments />
    </div>
  );
};

export default CalenderArea;
