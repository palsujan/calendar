import React from "react";
import styles from "./Calendar.module.css";
import { CalendarProps } from "./types";
import { WEEK_DAYS, getMonthName, generateMonthMatrix } from "./utils";
import WeekRow from "./WeekRow";

const Calendar: React.FC<CalendarProps> = ({ date, renderDateCell }) => {
  const monthName = getMonthName(date);
  const year = date.getFullYear();
  const matrix = generateMonthMatrix(date);

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendar}>
        <div className={styles.header}>
          <div className={styles.monthYear}>
            {monthName} {year}
          </div>
        </div>

        <div className={styles.weekdays}>
          {WEEK_DAYS.map((d) => (
            <div key={d} className={styles.weekday}>
              {d}
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {matrix.map((week, wi) => (
            <WeekRow
              key={wi}
              week={week}
              weekIndex={wi}
              selectedDate={date}
              renderDateCell={renderDateCell}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
