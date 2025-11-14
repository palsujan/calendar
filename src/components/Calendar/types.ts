export type DateCell = Date | null;
export type CalendarProps = {
  date: Date;
  renderDateCell?: (d: Date | null) => React.ReactNode;
};
