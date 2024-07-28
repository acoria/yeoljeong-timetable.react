import { Timetable } from "./timetable/timetable/Timetable";
import { TimetableMode } from "./timetable/TimetableMode";

function App() {
  return (
    <div>
      <Timetable
        mode={TimetableMode.READONLY}
        plannedBlocks={[]}
        timelineIntervalInMinutes={15}
      />
    </div>
  );
}

export default App;
