import { IWeekdayHeaderProps } from "./IWeekdayHeaderProps";
import styles from "./WeekdayHeader.module.scss";

export const WeekdayHeader: React.FC<IWeekdayHeaderProps> = (props) => {
  const timelineColumn = props.isTimelineShown ? 1 : 0;
  const lengthOfWeekdayBlockWithColor = props.blockColumnSpan + 1;

  const weekdayGridColumn = (index: number) => {
    const from = index * props.blockColumnSpan + 1 + timelineColumn;
    const to =
      index * props.blockColumnSpan +
      lengthOfWeekdayBlockWithColor +
      timelineColumn;

    // return "1/1";
    console.log(`${props.weekday} - ${from}/${to}`)
    return `{${from}/${to}}`;
  };

  // const weekdayGridColumn = (index: number) => {
  //   const test = `${index * props.blockColumnSpan + 1 + timelineColumn}/${
  //     index * 2 + 3 + timelineColumn
  //   }`;
  //   console.log(`${props.weekday} - ${test}`);
  //   return test;
  // };

  // const weekdayGridColumn = (index: number) =>
  //   `${index * props.blockColumnSpan + 1 + timelineColumn}/${
  //     index * 2 + 3 + timelineColumn
  //   }`;

  return (
    <div
      className={styles.weekdayHeader}
      style={{
        gridColumn: weekdayGridColumn(props.positionInGrid),
      }}
    >
      {props.weekday}
    </div>
  );
};
