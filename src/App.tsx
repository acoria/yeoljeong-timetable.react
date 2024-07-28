import { IPlannedBlock } from "./timetable/IPlannedBlocks";
import { Timetable } from "./timetable/timetable/Timetable";
import { TimetableMode } from "./timetable/TimetableMode";
import { Weekday } from "./timetable/Weekday";

function App() {
  const plannedBlocks: IPlannedBlock[] = [
    {
      title: "Training für Kinder",
      color: "#893F61",
      weekday: Weekday.MONDAY,
      startTime: new Date(2024, 11, 17, 17, 30),
      endTime: new Date(2024, 11, 17, 18, 30),
      ageInfo: "7 - 12 Jahren",
    },
    {
      title: "Pause",
      color: "#e2e2e2",
      weekday: Weekday.MONDAY,
      startTime: new Date(2024, 11, 17, 18, 30),
      endTime: new Date(2024, 11, 17, 18, 45),
    },
    {
      title: "Training für alle",
      color: "#485136",
      weekday: Weekday.MONDAY,
      startTime: new Date(2024, 11, 21, 18, 45),
      endTime: new Date(2024, 11, 21, 19, 45),
      ageInfo: "ab 13 Jahren",
    },
    {
      title: "Training für Fortgeschrittene",
      color: "#893F61",
      weekday: Weekday.WEDNESDAY,
      startTime: new Date(2024, 11, 19, 20),
      endTime: new Date(2024, 11, 19, 21),
    },
    {
      title: "Früher Training",
      color: "#893F61",
      weekday: Weekday.WEDNESDAY,
      startTime: new Date(2024, 11, 19, 17, 30),
      endTime: new Date(2024, 11, 19, 18, 30),
    },
    {
      title: "Training für Kinder",
      color: "#893F61",
      weekday: Weekday.TUESDAY,
      startTime: new Date(2024, 11, 19, 20),
      endTime: new Date(2024, 11, 19, 21),
      ageInfo: "7 - 12 Jahre",
    },

  ];

  return (
    <div>
      <Timetable
        mode={TimetableMode.READONLY}
        plannedBlocks={plannedBlocks}
        timelineIntervalInMinutes={15}
        showTimeline
      />
    </div>
  );
}

export default App;
