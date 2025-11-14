import React from "react";
import styles from "./WeekRow.module.css";
import { isSameDay } from "./utils";

type WeekRowProps = {
  week: (Date | null)[];
  weekIndex: number;
  selectedDate: Date;
  renderDateCell?: (d: Date | null) => React.ReactNode;
};

const WeekRow: React.FC<WeekRowProps> = ({
  week,
  weekIndex,
  selectedDate,
  renderDateCell,
}) => {
  return (
    <div className={styles.week}>
      {week.map((cellDate, dayIndex) => {
        const isSelected = cellDate !== null && isSameDay(cellDate, selectedDate);

        return (
          <div
            key={dayIndex}
            className={`${styles.cell} ${isSelected ? styles.selected : ""}`}
            aria-current={isSelected ? "date" : undefined}
            data-testid={
              cellDate
                ? `day-${cellDate.getDate()}`
                : `empty-${weekIndex}-${dayIndex}`
            }
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
  );
};

export default WeekRow;
