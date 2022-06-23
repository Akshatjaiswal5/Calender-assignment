import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Appointment.module.css";
import AppointmentDetails from "./AppointmentDetails";

const Appointment = (props) => {
  const [detailedView, setDetailedView] = useState(false);
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });

  const height = props.entry.endTime - props.entry.startTime;
  const day = new Date(props.entry.date).getDay();

  useEffect(() => {
    const a = {};
    a.r = 120 + Math.floor(Math.random() * 135);
    a.g = 120 + Math.floor(Math.random() * 135);
    a.b = 120 + Math.floor(Math.random() * 135);
    setRgb(a);
  }, []);

  const randomColor = `rgb(${rgb.r},${rgb.g},${rgb.b}`;
  let msg = props.entry.msg;
  if (msg.length > 30) {
    msg = msg.substring(0, 26) + "...";
  }
  const openDetails = () => {
    setDetailedView(true);
  };
  const closeDetails = () => {
    setDetailedView(false);
  };
  return (
    <div
      onClick={openDetails}
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
        cursor: "pointer",
      }}
      className={styles.appointment}
    >
      <label className={styles.msg}> {props.entry.msg} </label>
      <label className={styles.time}></label>

      {detailedView &&
        ReactDOM.createPortal(
          <AppointmentDetails
            state={detailedView}
            entry={props.entry}
            closeDetailedView={closeDetails}
            color={randomColor}
          />,
          document.getElementById("panel-overlay-root")
        )}
    </div>
  );
};

export default Appointment;
