import { ReactElement } from "react";
import { ITimetableProps } from "./ITimetableProps";
import styles from "./Timetable.module.scss";
import { useTimeTableViewModel } from "./useTimetableViewModel";
import { Block } from "../block/Block";
import { TimeConverter } from "../../services/TimeConverter";

export const Timetable: React.FC<ITimetableProps> = (props) => {
  const viewModel = useTimeTableViewModel(props);

  const timelineColumn = props.showTimeline ? 1 : 0;
  const weekdayGridColumn = (index: number) =>
    `${index * 2 + 1 + timelineColumn}/ ${index * 2 + 3 + timelineColumn}`;

  const timetableGridTemplateColumns = `${
    props.showTimeline ? "5%" : ""
  } ${viewModel.plannedWeekdays.map((_) => "1% auto").join(" ")}`;

  const timeline = (): ReactElement | ReactElement[] => {
    return viewModel.timeline.map((time, index) => (
      <div className={styles.timeline} style={{ gridRowStart: index + 2 }}>
        {time}
      </div>
    ));
  };

  const weekdays = (): ReactElement | ReactElement[] =>
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

  const blocks = (): ReactElement | ReactElement[] => {
    const { title, color, endTime, startTime, ageInfo, description } = {
      ...props.plannedBlocks[1],
    };
    return (
      <>
        <Block
          color={color}
          startTime={TimeConverter.getTimeAsString(startTime)}
          endTime={TimeConverter.getTimeAsString(endTime)}
          gridColumnStart={2}
          gridRowEnd={6}
          gridRowStart={2}
          title={title}
          ageInfo={ageInfo}
          description={description}
        />
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
