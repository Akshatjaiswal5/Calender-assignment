import React, { useContext } from "react";
import styles from "./Navigation.module.css";
import GlobalContext from "../../context/global-context";

const Navigation = (props) => {
  const ctx = useContext(GlobalContext);
  const nextWeek = () => {
    ctx.dispatchGlobalState({
      type: "TOGGLE_NEXT_WEEK",
    });
  };
  const prevWeek = () => {
    ctx.dispatchGlobalState({
      type: "TOGGLE_PREV_WEEK",
    });
  };
  return (
    <div className={styles.navigation}>
      <button className={styles.prev} onClick={prevWeek}>
        PREV
      </button>
      <button className={styles.next} onClick={nextWeek}>
        NEXT
      </button>
    </div>
  );
};

export default Navigation;
