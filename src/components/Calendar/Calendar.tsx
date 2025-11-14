import React from "react";
import styles from "./Calendar.module.css";
import { CalendarProps } from "./types";
import { WEEK_DAYS, getMonthName, generateMonthMatrix, isSameDay } from "./utils";

const Calendar = ({ date, renderDateCell }: CalendarProps) => {
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
          <div key={wi} className={styles.week}>
            {week.map((cellDate, di) => {
              const isSelected =
                cellDate !== null && isSameDay(cellDate, date);

              return (
                <div
                  key={di}
                  className={`${styles.cell} ${isSelected ? styles.selected : ""}`}
                  aria-current={isSelected ? "date" : undefined}
                  data-testid={cellDate ? `day-${cellDate.getDate()}` : `empty-${wi}-${di}`}
                >
                  {cellDate ? (
                    renderDateCell ? (
                      renderDateCell(cellDate)
                    ) : (
                      <span className={styles.dayNumber}>{cellDate.getDate()}</span>
                    )
                  ) : (
                    <span className={styles.empty} />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default  Calendar;