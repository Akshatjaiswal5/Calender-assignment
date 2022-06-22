import React from "react";
import styles from "./Appointment.module.css";

const Appointment = (props) => {
  const height = props.entry.endTime - props.entry.startTime;
  const day = new Date(props.entry.date).getDay();
  const randomColor = `rgb(${120 + Math.floor(Math.random() * 135)},${
    120 + Math.floor(Math.random() * 135)
  },${120 + Math.floor(Math.random() * 135)}`;
  let msg = props.entry.msg;
  if (msg.length > 30) {
    msg = msg.substring(0, 26) + "...";
  }
  return (
    <div
      style={{
        position: "absolute",
        width: "12.5%",
        paddingTop: "0.1em",
        padding: ".25em",
        top: 8 + props.entry.startTime * 5 + "em",
        left: 12.5 + day * 12.5 + "%",
        height: height * 5 + "em",
        backgroundColor: randomColor,
        boxShadow: "0 25px 30px rgba(0, 0, 0, 0.2)",
        lineHeight: "1em",
      }}
      className={styles.appointment}
    >
      <label className={styles.msg}> {props.entry.msg} </label>
      <label className={styles.time}></label>
    </div>
  );
};

export default Appointment;
