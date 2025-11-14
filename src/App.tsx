import React from "react";
import Calendar from "./components/Calendar/Calendar";

function App() {
  const dateYMD = (y: number, m: number, d: number) => {
    return new Date(y, m - 1, d);
  };
  const dateSample = dateYMD(2025, 11, 16);
  return (
    <div className="App">
      <Calendar date={dateSample} />
    </div>
  );
}

export default App;
