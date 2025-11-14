
export const WEEK_DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

export const getMonthName = (date: Date, locale?: string) => {
  return date.toLocaleString(locale ?? undefined, { month: "long" });
}

export const generateMonthMatrix = (forDate: Date): (Date | null)[][] => {
  const year = forDate.getFullYear();
  const month = forDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const firstDayIdx = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [];

  for (let i = 0; i < firstDayIdx; i++) cells.push(null);

  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(year, month, d));
  }

  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (Date | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  return weeks;
}

export const isSameDay = (a: Date | null, b: Date | null) => {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
export {};
