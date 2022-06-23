import React, { useContext, useState } from "react";
import GlobalContext from "../../context/global-context";
import styles from "./AppointmentDetails.module.css";
const timestamps = [
  "00:00 AM",
  "00:30 AM",
  "01:00 AM",
  "01:30 AM",
  "02:00 AM",
  "02:30 AM",
  "03:00 AM",
  "03:30 AM",
  "04:00 AM",
  "04:30 AM",
  "05:00 AM",
  "05:30 AM",
  "06:00 AM",
  "06:30 AM",
  "07:00 AM",
  "07:30 AM",
  "08:00 AM",
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
  "12:00 PM",
];

const AppointmentDetails = (props) => {
  const ctx = useContext(GlobalContext);

  const deleteHandler = () => {
    ctx.dispatchGlobalState({
      type: "DELETE_APPOINTMENT",
      date: props.entry.date,
      startTime: props.entry.startTime,
    });
    props.closeDetailedView();
  };
  const exit = () => {
    ctx.dispatchGlobalState({});
    props.closeDetailedView();
  };

  return (
    <div className={styles.overlay}>
      <div
        style={{
          backgroundColor: props.color,
          height: "50%",
          width: "60%",
        }}
      >
        <label className={styles.title}>{props.entry.msg}</label>
        <label className={styles.duration}>
          {timestamps[props.entry.startTime]}-{timestamps[props.entry.endTime]}
        </label>
        <button className={styles.cancel} onClick={exit}>
          Cancel
        </button>
        <button className={styles.delete} onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AppointmentDetails;
