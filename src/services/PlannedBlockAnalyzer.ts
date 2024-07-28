import { IPlannedBlock } from "../timetable/IPlannedBlocks";
import { Weekday } from "../timetable/Weekday";
import { Time } from "../types/Time";
import { IPlannedBlockAnalyzer } from "./IPlannedBlockAnalyzer";
import { TimeConverter } from "./TimeConverter";

class PlannedBlockAnalyzerDefault implements IPlannedBlockAnalyzer {
  findPositionInInterval(timeIntervals: Time[], date: Date): number {
    return timeIntervals.findIndex(
      (timeInterval) =>
        timeInterval[0] === date.getHours() &&
        timeInterval[1] === date.getMinutes()
    );
  }

  getTimeIntervals(
    plannedBlocks: IPlannedBlock[],
    timelineIntervalInMinutes: number
  ): Time[] {
    const earliest = TimeConverter.findEarliestTime(
      plannedBlocks.map((block) => block.startTime)
    );
    const latest = TimeConverter.findLatestTime(
      plannedBlocks.map((block) => block.endTime)
    );

    let dateCursor: Date = earliest;
    const times: Time[] = [];
    while (TimeConverter.getTimeDifferenceInMinutes(dateCursor, latest) >= 0) {
      times.push([dateCursor.getHours(), dateCursor.getMinutes()]);
      dateCursor = TimeConverter.addMinutes(
        dateCursor,
        timelineIntervalInMinutes
      );
    }

    return times;
  }
  getPlannedWeekdays(plannedBlocks: IPlannedBlock[]): Weekday[] {
    const weekdays: Weekday[] = [];
    plannedBlocks.forEach((block) => {
      if (weekdays.findIndex((item) => item === block.weekday) === -1) {
        weekdays.push(block.weekday);
      }
    });
    return weekdays.sort((a, b) => a - b);
  }
}

export const PlannedBlockAnalyzer = new PlannedBlockAnalyzerDefault();
