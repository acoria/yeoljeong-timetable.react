import { IPlannedBlock } from "./timetable/IPlannedBlocks";
import { Timetable } from "./timetable/timetable/Timetable";
import { TimetableMode } from "./timetable/TimetableMode";
import { Weekday } from "./timetable/Weekday";
import styles from "./App.module.scss";

function App() {
  const plannedBlocks: IPlannedBlock[] = [
    {
      title: "Training für Kinder",
      color: "#893F61",
      weekdayIndex: Weekday.MONDAY,
      startTime: new Date(2024, 11, 17, 17, 30),
      endTime: new Date(2024, 11, 17, 18, 30),
      ageInfo: "7 - 12 Jahren",
    },
    {
      title: "Pause",
      color: "#e2e2e2",
      weekdayIndex: Weekday.MONDAY,
      startTime: new Date(2024, 11, 17, 18, 30),
      endTime: new Date(2024, 11, 17, 18, 45),
    },
    {
      title: "Training für alle",
      color: "#485136",
      weekdayIndex: Weekday.MONDAY,
      startTime: new Date(2024, 11, 21, 18, 45),
      endTime: new Date(2024, 11, 21, 19, 45),
      ageInfo: "ab 13 Jahren",
    },
    {
      // title: "Training für alle",
      title: "Training für Fortgeschrittene",
      color: "#893F61",
      weekdayIndex: Weekday.WEDNESDAY,
      startTime: new Date(2024, 11, 19, 20),
      endTime: new Date(2024, 11, 19, 21),
    },
    {
      title: "Früheres Training",
      color: "#3f8976",
      weekdayIndex: Weekday.WEDNESDAY,
      startTime: new Date(2024, 11, 19, 15, 30),
      endTime: new Date(2024, 11, 19, 17, 30),
    },
    {
      title: "Training für Kinder",
      color: "#893F61",
      weekdayIndex: Weekday.TUESDAY,
      startTime: new Date(2024, 11, 19, 20, 0),
      endTime: new Date(2024, 11, 19, 21, 15),
      ageInfo: "7 - 12 Jahre",
    },
    {
      title: "Training für Kinder",
      color: "#893F61",
      weekdayIndex: Weekday.SATURDAY,
      startTime: new Date(2024, 11, 19, 20, 0),
      endTime: new Date(2024, 11, 19, 21, 15),
      ageInfo: "7 - 12 Jahre",
    },
    // {
    //   title: "Training für Kinder",
    //   color: "#36d1b7",
    //   weekdayIndex: Weekday.WEDNESDAY,
    //   startTime: new Date(2024, 11, 19, 13),
    //   endTime: new Date(2024, 11, 19, 14),
    //   ageInfo: "7 - 12 Jahre",
    // },
  ];

  return (
    <div className={styles.app}>
      <Timetable
        mode={TimetableMode.READONLY}
        plannedBlocks={plannedBlocks}
        timelineIntervalInMinutes={15}
      />
    </div>
  );
}

export default App;
