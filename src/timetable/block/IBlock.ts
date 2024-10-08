import { IBlock as IBlockShared } from "../../shared/IBlock";

export interface IBlock extends IBlockShared {
  startTime: string;
  endTime: string;
  xPositionOfDayInTimetable: number;
  startTimeIntervalIndex: number;
  endTimeIntervalIndex: number;
}
