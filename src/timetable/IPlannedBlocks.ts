import { ISignedUp } from "./signup/ISignedUp";
import { IBlock } from "../shared/IBlock";
import { Weekday } from "./Weekday";

export interface IPlannedBlock extends IBlock, ISignedUp {
  weekday: Weekday;
  startTime: Date;
  endTime: Date;
  reoccuring?: boolean;
  // teacher
}
