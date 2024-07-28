import { IPlannedBlock } from "./timetable/IPlannedBlocks";
import { Timetable } from "./timetable/timetable/Timetable";
import { TimetableMode } from "./timetable/TimetableMode";
import { Weekday } from "./timetable/Weekday";

function App() {
  const plannedBlocks: IPlannedBlock[] = [
    {
      title: "Training für alle",
      color: "#485136",
      weekday: Weekday.FRIDAY,
      startTime: new Date(2024, 11, 21, 18, 45),
      endTime: new Date(2024, 11, 21, 19, 45),
    },
    {
      title: "Training für Anfänger",
      color: "#893F61",
      weekday: Weekday.MONDAY,
      startTime: new Date(2024, 11, 17, 17, 30),
      endTime: new Date(2024, 11, 17, 18, 30),
    },
    {
      title: "Training für Fortgeschrittene",
      color: "#893F61",
      weekday: Weekday.WEDNESDAY,
      startTime: new Date(2024, 11, 19, 20),
      endTime: new Date(2024, 11, 19, 21),
    },
    // {
    //   title: "Training ab 16 Uhr",
    //   color: "#893F61",
    //   weekday: Weekday.TUESDAY,
    //   startTime: new Date(2024, 11, 19, 16, 30),
    //   endTime: new Date(2024, 11, 19, 17),
    // },
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
