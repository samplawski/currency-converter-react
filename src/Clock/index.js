import { useState, useEffect } from "react";
import style from "./style.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

useEffect{() => {

}};

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

  const formattedDate = date.toLocaleDateString(formDate);
  const formattedTime = date.toLocaleDateString(formTime);



  <p className="clock">Dzisiaj jest {formattedDate} roku, {formattedTime}</p>;
};

export default Clock;
