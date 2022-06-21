import styles from "./Calender.module.css";
import TitleBar from "./TitleBar/TitleBar";
import WeekBar from "./WeekBar/WeekBar";
const Calender = (props) => {
  return (
    <div className={styles.main}>
      <TitleBar />
      <WeekBar />
    </div>
  );
};

export default Calender;
