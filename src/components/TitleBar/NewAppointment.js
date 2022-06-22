import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./NewAppointment.module.css";
import NewAppointmentForm from "./NewAppointmentForm";

const NewAppointment = () => {
  const [formState, setFormState] = useState(false);

  return (
    <div className={styles.new}>
      <button onClick={() => setFormState(true)}>New</button>
      {formState &&
        ReactDOM.createPortal(
          <NewAppointmentForm setFormState={setFormState} />,
          document.getElementById("overlay-root")
        )}
    </div>
  );
};

export default NewAppointment;
