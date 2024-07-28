import { PlannedBlockAnalyzer } from "../../services/PlannedBlockAnalyzer";
import { Weekday } from "../Weekday";
import { ITimetableProps } from "./ITimetableProps";

export const useTimeTableViewModel = (props: ITimetableProps) => {
  const plannedWeekdays = PlannedBlockAnalyzer.getPlannedWeekdays(
    props.plannedBlocks
  ).map((weekday) => Object.values(Weekday)[weekday]);

  const timeline: string[] = PlannedBlockAnalyzer.getTimeIntervals(
    props.plannedBlocks,
    15
  ).map((time) => `${time[0]}:${time[1] === 0 ? "00" : time[1]}`);

  return { plannedWeekdays, timeline };
};
