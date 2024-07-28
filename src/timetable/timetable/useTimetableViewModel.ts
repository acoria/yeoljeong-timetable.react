import { PlannedBlockAnalyzer } from "../../services/PlannedBlockAnalyzer";
import { TimeConverter } from "../../services/TimeConverter";
import { Time } from "../../types/Time";
import { IBlock } from "../block/IBlock";
import { Weekday } from "../Weekday";
import { ITimetableProps } from "./ITimetableProps";

export const useTimeTableViewModel = (props: ITimetableProps) => {
  const plannedWeekdays = PlannedBlockAnalyzer.getPlannedWeekdays(
    props.plannedBlocks
  ).map((weekday) => Object.values(Weekday)[weekday]);

  const timeIntervals: Time[] = PlannedBlockAnalyzer.getTimeIntervals(
    props.plannedBlocks,
    props.timelineIntervalInMinutes
  );
  const timeline: string[] = timeIntervals.map((time) =>
    TimeConverter.getTimeAsString(time)
  );

  const getBlocks = (): IBlock[] => {
    return props.plannedBlocks.map((plannedBlock) => {
      return {
        title: plannedBlock.title,
        ageInfo: plannedBlock.ageInfo,
        description: plannedBlock.description,
        color: plannedBlock.color,
        startTime: TimeConverter.getDateTimeAsString(plannedBlock.startTime),
        endTime: TimeConverter.getDateTimeAsString(plannedBlock.endTime),
        positionInWeek:
          +(Object.keys(Weekday)[plannedBlock.weekday] as any as number) + 1,
        startIntervalIndex: PlannedBlockAnalyzer.findPositionInInterval(
          timeIntervals,
          plannedBlock.startTime
        ),
        endIntervalIndex: PlannedBlockAnalyzer.findPositionInInterval(
          timeIntervals,
          plannedBlock.endTime
        ),
      };
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
