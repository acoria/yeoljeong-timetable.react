import useWindowDimensions from "../../hooks/useWindowDimensions";
import { PlannedBlockAnalyzer } from "../../services/PlannedBlockAnalyzer";
import { TimeConverter } from "../../services/TimeConverter";
import { Time } from "../../types/Time";
import { IBlock } from "../block/IBlock";
import { Weekday } from "../Weekday";
import { ITimetableProps } from "./ITimetableProps";
import global from "../../styles/core/global.module.scss";
import { IPlannedBlock } from "../IPlannedBlocks";

export const useTimeTableViewModel = (props: ITimetableProps) => {
  const { width } = useWindowDimensions();

  const isSmallScreen = width <= +global.mediumScreenWidth;
  const plannedWeekdaysIndices = PlannedBlockAnalyzer.getPlannedWeekdays(
    props.plannedBlocks
  );

  const plannedWeekdays: string[] = plannedWeekdaysIndices.map(
    (weekday) => Object.values(Weekday)[weekday] as string
  );

  const xPositionOfDayInTimetable = (weekday: Weekday) =>
    plannedWeekdaysIndices.findIndex((item) => item === weekday) + 1;

  const timeIntervals: Time[] = PlannedBlockAnalyzer.getTimeIntervals(
    props.plannedBlocks,
    props.timelineIntervalInMinutes
  );
  const timeline: string[] = timeIntervals.map((time) =>
    TimeConverter.getTimeAsString(time)
  );

  const getAllBlocks = (): IBlock[] => {
    return props.plannedBlocks.map((plannedBlock) =>
      block(plannedBlock, xPositionOfDayInTimetable)
    );
  };

  const block = (
    plannedBlock: IPlannedBlock,
    xPositionOfDayInTimetable: (weekday: Weekday) => number
  ): IBlock => {
    return {
      title: plannedBlock.title,
      ageInfo: plannedBlock.ageInfo,
      description: plannedBlock.description,
      color: plannedBlock.color,
      startTime: TimeConverter.getDateTimeAsString(plannedBlock.startTime),
      endTime: TimeConverter.getDateTimeAsString(plannedBlock.endTime),
      xPositionOfDayInTimetable: xPositionOfDayInTimetable(
        plannedBlock.weekdayIndex
      ),
      startTimeIntervalIndex: PlannedBlockAnalyzer.findPositionInInterval(
        timeIntervals,
        plannedBlock.startTime
      ),
      endTimeIntervalIndex: PlannedBlockAnalyzer.findPositionInInterval(
        timeIntervals,
        plannedBlock.endTime
      ),
    };
  };

  const allBlocks: IBlock[] = getAllBlocks();
  const blocksByWeekday = (weekday: Weekday) => {
    const plannedBlocks = props.plannedBlocks.filter(
      (plannedBlock) =>
        plannedBlock.weekdayIndex ===
        Object.values(Weekday).findIndex((item) => item === weekday)
    );
    return plannedBlocks.map((plannedBlock) => block(plannedBlock, () => 2));
  };

  return {
    allBlocks,
    blocksByWeekday,
    plannedWeekdays,
    timeline,
    isSmallScreen,
  };
};
