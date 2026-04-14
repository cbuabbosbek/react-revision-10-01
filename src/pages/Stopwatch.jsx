import { useState } from "react";

function Stopwatch() {
  const [timer, setTimer] = useState(false);
  const [time, setTime] = useState(0);

  const runTimer = () => {
    console.log("clicked...");
    setTimer(!timer);
    setInterval(() => {
      setTime(time + 1);
    }, 1000);
  };

  const reset = () => {
    console.log("clicked...");
    setTimer(false);
  };

  return (
    <>
      <div className="container">
        <h1> Stopwatch</h1>

        <h1 className="timer">00:00:00</h1>
        <h1 className="timer">{time}</h1>
        <button
          onClick={runTimer}
          className={`btn ${timer ? "btn-stop" : "btn-start"}`}
        >
          {timer ? "Stop" : "Start"}
        </button>
        <button onClick={reset} className="btn btn-reset">
          Reset
        </button>
      </div>
    </>
  );
}

export default Stopwatch;
