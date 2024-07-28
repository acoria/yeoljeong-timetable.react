import { ReactElement } from "react";
import { Weekday } from "../Weekday";
import { ITimetableProps } from "./ITimetableProps";
import styles from "./Timetable.module.scss";
import { PlannedBlockAnalyzer } from "../../services/PlannedBlockAnalyzer";
import { useTimeTableViewModel } from "./useTimetableViewModel";

export const Timetable: React.FC<ITimetableProps> = (props) => {
  const viewModel = useTimeTableViewModel(props);

  const timelineColumn = props.showTimeline ? 1 : 0;
  const weekdayGridColumn = (index: number) =>
    `${index * 2 + 1 + timelineColumn}/ ${index * 2 + 3 + timelineColumn}`;

  const timetableGridTemplateColumns = `${
    props.showTimeline ? "5%" : ""
  } ${viewModel.plannedWeekdays.map((_) => "1% auto").join(" ")}`;

  const timeline = (): ReactElement[] => {
    return viewModel.timeline.map((time, index) => (
      <div className={styles.timeline} style={{ gridRowStart: index + 2 }}>
        {time}
      </div>
    ));
  };

  const weekdays = (): ReactElement[] =>
    viewModel.plannedWeekdays.map((weekday, index) => (
      <div
        className={styles.day}
        style={{
          gridColumn: weekdayGridColumn(index),
        }}
      >
        {weekday}
      </div>
    ));
    
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
    <div
      className={styles.timetable}
      style={{ gridTemplateColumns: timetableGridTemplateColumns }}
    >
      <div className={styles.leftTop}></div>
      {timeline()}
      {weekdays()}
      {blocks()}
    </div>
  );
};
