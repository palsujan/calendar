import React from 'react';

// import './App.css';
import Calendar from './components/Calendar/Calendar';

function App() {
    function dateYMD(y: number, m: number, d: number) {
    return new Date(y, m - 1, d); // so you can use a 1-based month
  }
  const sample = dateYMD(2025, 11, 16);
  return (
    <div className="App">
      <Calendar date={sample} />
    </div>
  );
}

export default App;
