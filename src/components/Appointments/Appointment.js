import React from "react";
import styles from "./Appointment.module.css";

const Appointment = (props) => {
  const height = props.entry.endTime - props.entry.startTime;
  const day = new Date(props.entry.date).getDay();

  return (
    <div
      style={{
        marginLeft: 12.5 + day * 12.5 + "%",
        height: height * 5 + "em",
        width: "12.5%",
        color: "black",
        backgroundColor: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
          Math.random() * 255
        )},${Math.floor(Math.random() * 255)}`,
      }}
    ></div>
  );
};

export default Appointment;
