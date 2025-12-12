import { useState, useEffect } from "react";

export const useCurrentDate = () => {
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

  const foramttedDate = date.toLocaleDateString("pl-PL", formDate);
  const formattedTime = date.toLocaleTimeString("pl-PL", formTime);

  return { date, foramttedDate, formattedTime };
};
