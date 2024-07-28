import { IPlannedBlock } from "../timetable/IPlannedBlocks";
import { Weekday } from "../timetable/Weekday";
import { Time } from "../types/Time";

export interface IPlannedBlockAnalyzer {
  getPlannedWeekdays(plannedBlocks: IPlannedBlock[]): Weekday[];
  getTimeIntervals(
    plannedBlocks: IPlannedBlock[],
    timelineIntervalInMinutes: number
  ): Time[];
}
