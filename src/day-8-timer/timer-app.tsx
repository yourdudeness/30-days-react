import { useEffect, useRef, useState } from "react";

const TimerApp = () => {
  const fiveMin = new Date(0, 0, 0, 0, 1);
  const [timeRemaining, setTimeRemaining] = useState(fiveMin);
  const formattedDate = Intl.DateTimeFormat("en-US", {
    minute: "numeric",
    second: "numeric",
  }).format(timeRemaining);
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = () => {
    if (timerId.current) return;

    if (timeRemaining.getMinutes() === 0 && timeRemaining.getSeconds() === 0) {
      setTimeRemaining(fiveMin);
    }

    timerId.current = setInterval(() => {
      setTimeRemaining((state) => {
        if (state.getMinutes() === 0 && state.getSeconds() === 0) {
          if (timerId.current) {
            clearInterval(timerId.current);
            setTimeRemaining(new Date(0, 0, 0, 0, 0));
            timerId.current = null;
          }
        }
        return new Date(state.getTime() - 1000);
      });
    }, 1000);
  };

  const reserTimer = () => {
    if (timerId.current === null) return;
    if (timerId.current) {
      clearInterval(timerId.current);
      timerId.current = null;
      setTimeRemaining(fiveMin);
    }
  };

  const stopTimer = () => {
    if (timerId.current === null) return;
    console.log(timerId.current, "stop");
    if (timerId.current) {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h4>{formattedDate}</h4>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={reserTimer}>Reset</button>
      </div>
    </div>
  );
};

export default TimerApp;
