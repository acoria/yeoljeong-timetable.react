import { PlannedBlockAnalyzer } from "../../services/PlannedBlockAnalyzer";
import { TimeConverter } from "../../services/TimeConverter";
import { Time } from "../../types/Time";
import { IBlock } from "../block/IBlock";
import { Weekday } from "../Weekday";
import { ITimetableProps } from "./ITimetableProps";

export const useTimeTableViewModel = (props: ITimetableProps) => {
  const plannedWeekdaysIndices = PlannedBlockAnalyzer.getPlannedWeekdays(
    props.plannedBlocks
  );

  const plannedWeekdays = plannedWeekdaysIndices.map(
    (weekday) => Object.values(Weekday)[weekday]
  );

  const positionOfDayInTimetable = (weekday: Weekday) =>
    plannedWeekdaysIndices.findIndex((item) => item === weekday) + 1;

  const timeIntervals: Time[] = PlannedBlockAnalyzer.getTimeIntervals(
    props.plannedBlocks,
    props.timelineIntervalInMinutes
  );
  const timeline: string[] = timeIntervals.map((time) =>
    TimeConverter.getTimeAsString(time)
  );

  const getBlocks = (): IBlock[] => {
    return props.plannedBlocks.map((plannedBlock) => {
      const block = {
        title: plannedBlock.title,
        ageInfo: plannedBlock.ageInfo,
        description: plannedBlock.description,
        color: plannedBlock.color,
        startTime: TimeConverter.getDateTimeAsString(plannedBlock.startTime),
        endTime: TimeConverter.getDateTimeAsString(plannedBlock.endTime),
        positionOfDayInTimetable: positionOfDayInTimetable(
          plannedBlock.weekday
        ),
        startIntervalIndex: PlannedBlockAnalyzer.findPositionInInterval(
          timeIntervals,
          plannedBlock.startTime
        ),
        endIntervalIndex: PlannedBlockAnalyzer.findPositionInInterval(
          timeIntervals,
          plannedBlock.endTime
        ),
      };
      return block;
    });
  };
  const blocks: IBlock[] = getBlocks();

  return {
    blocks,
    plannedWeekdays,
    timeline,
    showTimeline: props.showTimeline,
  };
};
