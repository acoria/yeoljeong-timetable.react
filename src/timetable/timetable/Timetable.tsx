import { ReactElement } from "react";
import { Weekday } from "../Weekday";
import { ITimetableProps } from "./ITimetableProps";
import styles from "./Timetable.module.scss";

export const Timetable: React.FC<ITimetableProps> = (props) => {
  // const cssProperties = {

  const timeline = (): ReactElement => {
    const times = [
      "17:30",
      "17:45",
      "18:00",
      "18:15",
      "18:30",
      "18:45",
      "19:00",
    ].map((time, index) => (
      <div className={styles.timeline} style={{ gridColumnStart: 1, gridRowStart: index + 2 }}>{time}</div>
    ));
    return (
      <>
        <div></div>
        {times}
      </>
    );
  };

  const weekdays = (): ReactElement => {
    const days = [Weekday.MONDAY, Weekday.WEDNESDAY, Weekday.FRIDAY].map(
      (weekday, index) => (
        <div
          className={styles.day}
          style={{
            gridColumnStart: index * 2 + 2,
            gridRowStart: 1,
            gridColumn: "span 2",
          }}
        >
          {Object.values(Weekday)[weekday]}
        </div>
      )
    );
    return <>{days}</>;
  };

  const blocks = (): ReactElement => {
    return (
      <>
        <div
          style={{
            gridRowStart: 2,
            gridRowEnd: 6,
            gridColumnStart: 2,
            backgroundColor: "#893F61",
          }}
        />
        <div
          className={styles.block}
          style={{ gridColumnStart: 3, gridRowStart: 2, gridRowEnd: 6 }}
        >
          <h1 className={styles.blockTitle}>Anfängertraining</h1>
          <p className={styles.blockAgeInfo}>(ab 13 Jahren)</p>
          <p className={styles.blockDescription}> 17:45 - 18:30</p>
        </div>
      </>
    );
  };

  return (
    <div className={styles.timetable}>
      <div className={styles.leftTop}></div>
      {timeline()}
      {weekdays()}
      {blocks()}
    </div>
  );
};
