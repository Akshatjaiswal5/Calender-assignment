import { useFormik } from "formik";
import React, { useContext } from "react";
import styles from "./NewAppointmentForm.module.css";
import GlobalContext from "../../context/global-context";
const timestamps = [
  "00:00 AM",
  "00:30 AM",
  "01:30 AM",
  "01:00 AM",
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

const NewAppointmentForm = (props) => {
  const ctx = useContext(GlobalContext);

  const submitHandler = (values) => {
    props.setFormState(false);
    ctx.dispatchGlobalState({
      type: "ADD_NEW_APPOINTMENT",
      date: new Date(values.date).toLocaleDateString(),
      msg: values.msg,
      startTime: values.startTime,
      endTime: values.endTime,
    });
  };
  const exit = () => {
    props.setFormState(false);
  };
  const formik = useFormik({
    initialValues: {
      date: new Date().toLocaleDateString("en-CA"),
      startTime: 0,
      endTime: 0,
      msg: "",
    },
    onSubmit: submitHandler,
  });

  return (
    <div className={styles.dropshadow}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label className={styles.heading}>New Appointment</label>
        <div className={styles.msg}>
          <textarea
            id="msg"
            name="msg"
            placeholder="Enter the appointment title"
            value={formik.values.msg}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.date}>
          <input
            type="date"
            id="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.time}>
          <label>From</label>
          <select
            id="startTime"
            name="startTime"
            value={formik.values.startTime}
            onChange={formik.handleChange}
          >
            {timestamps.map((time, i) => (
              <option key={i} value={i}>
                {time}
              </option>
            ))}
          </select>
          <label>To</label>
          <select
            id="endTime"
            name="endTime"
            value={formik.values.endTime}
            onChange={formik.handleChange}
          >
            {timestamps.map((time, i) => (
              <option key={i} value={i}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={exit}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default NewAppointmentForm;
