import { IBlock as IBlockShared } from "../../shared/IBlock";

export interface IBlock extends IBlockShared {
  startTime: string;
  endTime: string;
  positionInWeek: number;
  startIntervalIndex: number;
  endIntervalIndex: number;
}
