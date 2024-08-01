import { ReactElement } from "react";
import { Block } from "../block/Block";
import { ITimetableProps } from "./ITimetableProps";
import styles from "./Timetable.module.scss";
import { useTimeTableViewModel } from "./useTimetableViewModel";
import { WeekdayHeader } from "../weekdayHeader/WeekdayHeader";
import { IBlock } from "../block/IBlock";
import { Weekday } from "../Weekday";

export const Timetable: React.FC<ITimetableProps> = (props) => {
  const viewModel = useTimeTableViewModel(props);

  //the number of grid cells(rows) before the actual block starts
  const blockStartRowOffset = 2;
  //the number of grid cells a block occupies
  const blockColumnSpan = 2;
  const timetableGridTemplateColumns = `${viewModel.showTimeline ? "5%" : ""} ${
    viewModel.isSmallScreen
      ? "1% auto"
      : viewModel.plannedWeekdays.map((_) => "1% auto").join(" ")
  }`;

  const timeline = (): ReactElement | ReactElement[] => {
    return viewModel.timeline.map((time, index) => (
      <div
        key={`${index}_${time}`}
        className={styles.timeline}
        style={{ gridRowStart: index + 2 }}
      >
        {time}
      </div>
    ));
  };

  const weekdays = (): ReactElement | ReactElement[] =>
    viewModel.plannedWeekdays.map((weekday, index) => (
      <WeekdayHeader
        blockColumnSpan={blockColumnSpan}
        isTimelineShown={viewModel.showTimeline ?? false}
        positionInGrid={index}
        weekday={weekday}
      />
    ));

  const weekday = (weekday: string): ReactElement => (
    <WeekdayHeader
      blockColumnSpan={blockColumnSpan}
      isTimelineShown={viewModel.showTimeline ?? false}
      positionInGrid={viewModel.isSmallScreen ? 0 : 1}
      weekday={weekday}
    />
  );
  const allBlocks = (): ReactElement | ReactElement[] => {
    return viewModel.allBlocks.map((block) => blockElement(block));
  };

  const blocksByWeekday = (weekday: Weekday): ReactElement | ReactElement[] => {
    return viewModel
      .blocksByWeekday(weekday)
      .map((block) => blockElement(block));
  };

  const blockElement = (block: IBlock): ReactElement => (
    <Block
      color={block.color}
      startTime={block.startTime}
      endTime={block.endTime}
      gridColumnStart={
        viewModel.isSmallScreen
          ? block.positionOfDayInTimetable
          : block.positionOfDayInTimetable * blockColumnSpan
      }
      gridRowStart={block.startIntervalIndex + blockStartRowOffset}
      gridRowEnd={block.endIntervalIndex + blockStartRowOffset}
      title={block.title}
      ageInfo={block.ageInfo}
      description={block.description}
    />
  );

  return (
    <>
      {!viewModel.isSmallScreen && (
        <div
          className={styles.timetable}
          style={{ gridTemplateColumns: timetableGridTemplateColumns }}
        >
          {viewModel.showTimeline && <div className={styles.leftTop}></div>}
          {viewModel.showTimeline && timeline()}
          {weekdays()}
          {allBlocks()}
        </div>
      )}
      {viewModel.isSmallScreen &&
        viewModel.plannedWeekdays.map((plannedWeekday) => (
          <div
            className={styles.timetable}
            style={{ gridTemplateColumns: timetableGridTemplateColumns }}
          >
            {viewModel.showTimeline && <div className={styles.leftTop}></div>}
            {viewModel.showTimeline && timeline()}
            {weekday(plannedWeekday)}
            {blocksByWeekday(plannedWeekday as any as Weekday)}
          </div>
        ))}
    </>
  );
};
