import React, { useContext } from "react";
import GlobalContext from "../../context/global-context";
import Appointment from "./Appointment";

const Appointments = (props) => {
  const ctx = useContext(GlobalContext);
  const currWeekArr = ctx.currWeekArr;
  const appointments = ctx.appointments;

  const entries = [];

  currWeekArr.forEach((date) => {
    if (appointments.hasOwnProperty(date)) {
      appointments[date].forEach((entry) => {
        entries.push(entry);
      });
    }
  });

  return (
    <>
      {entries.map((entry) => (
        <Appointment key={Math.random().toString()} entry={entry} />
      ))}
    </>
  );
};

export default Appointments;
