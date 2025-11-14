import React from "react";
import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

describe("Calendar component", () => {
  test("renders month and year in header", () => {
    const d = new Date(2022, 9, 3);
    render(<Calendar date={d} />);
    expect(screen.getByText(/October 2022/i)).toBeInTheDocument();
  });

  test("renders weekday headings (Su..Sa)", () => {
    const d = new Date(2020, 2, 23);
    render(<Calendar date={d} />);
    ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].forEach((wd) =>
      expect(screen.getByText(wd)).toBeInTheDocument()
    );
  });

  test("renders the correct day numbers and highlights the selected date", () => {
    const d = new Date(2020, 2, 23);
    render(<Calendar date={d} />);
    expect(screen.getByTestId("day-1")).toBeInTheDocument();
    const selected = screen.getByTestId("day-23");
    expect(selected).toBeInTheDocument();
    expect(selected).toHaveAttribute("aria-current", "date");
  });
});
export {};