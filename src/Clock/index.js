import { useState, useEffect } from "react";
import style from "./style.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formDate = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <p className="clock">
      <span className="clock__value">
        Dzisiaj jest {date.toLocaleDateString("pl-PL", formDate)} roku, 
        godzina:{" "} {date.toLocaleTimeString("pl-PL", formTime)}.
      </span>
    </p>
  );
};

export default Clock;
