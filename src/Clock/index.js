import "./style.css";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const { foramttedDate, formattedTime } = useCurrentDate();

  return (
    <p className="clock">
      <span className="clock__value">
        Dzisiaj jest {foramttedDate} roku, godzina: {formattedTime}.
      </span>
    </p>
  );
};

export default Clock;
