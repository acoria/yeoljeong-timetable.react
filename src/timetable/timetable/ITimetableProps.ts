import { IPlannedBlock } from "../IPlannedBlocks";
import { TimetableMode } from "../TimetableMode";

export interface ITimetableProps {
  // calendarWeek/Date
  timelineIntervalInMinutes: number;
  plannedBlocks: IPlannedBlock[];
  mode: TimetableMode;
  onBlockSignIn?: (plannedBlock: IPlannedBlock) => void;
  onBlockSignOut?: (plannedBlock: IPlannedBlock) => void;
  //   onBlockCreate?: (plannedBlock: IPlannedBlock) => void;
  showEmptyDays?: boolean;
  showTimeline?: boolean;
}
