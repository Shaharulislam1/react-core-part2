import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const updatedRuns = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };
  const handle4 = () => {
    const handle4 = runs + 4;
    setRuns(handle4);
  };
  const handle6 = () => {
    const handle6 = runs + 6;
    setRuns(handle6);
  };

  return (
    <div>
      <h3>Player: Bangla Batsman.</h3>
      {
        runs > 50 && <p>Your Score: 50</p>
      }
      <h2>Score: {runs} </h2>
      <button onClick={updatedRuns}>Single</button>
      <button onClick={handle4}>Four</button>
      <button onClick={handle6}>Six</button>
    </div>
  );
}
