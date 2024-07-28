import { PlannedBlockAnalyzer } from "../../services/PlannedBlockAnalyzer";
import { TimeConverter } from "../../services/TimeConverter";
import { IBlock } from "../block/IBlock";
import { Weekday } from "../Weekday";
import { ITimetableProps } from "./ITimetableProps";

export const useTimeTableViewModel = (props: ITimetableProps) => {
  const plannedWeekdays = PlannedBlockAnalyzer.getPlannedWeekdays(
    props.plannedBlocks
  ).map((weekday) => Object.values(Weekday)[weekday]);

  const timeline: string[] = PlannedBlockAnalyzer.getTimeIntervals(
    props.plannedBlocks,
    props.timelineIntervalInMinutes
  ).map((time) => TimeConverter.getTimeAsString(time));

  const getBlocks = (): IBlock[] => {
    const { title, color, endTime, startTime, ageInfo, description, weekday } =
      {
        ...props.plannedBlocks[1],
      };

    const block: IBlock = {
      title: title,
      ageInfo: ageInfo,
      description: description,
      color: color,
      startTime: TimeConverter.getDateTimeAsString(startTime),
      endTime: TimeConverter.getDateTimeAsString(endTime),
      positionInWeek: +(Object.keys(Weekday)[weekday] as any as number) + 1,
    };

    return [block];
  };
  const blocks: IBlock[] = getBlocks();

  return {
    blocks,
    plannedWeekdays,
    timeline,
    showTimeline: props.showTimeline,
  };
};
