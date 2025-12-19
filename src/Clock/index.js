import { StyledClock, ClockValue } from "./styled.js";
import { useCurrentDate } from "./useCurrentDate";

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

const Clock = () => {
  const { date } = useCurrentDate();

  const foramttedDate = date.toLocaleDateString("pl-PL", formDate);
  const formattedTime = date.toLocaleTimeString("pl-PL", formTime);

  return (
    <StyledClock>
      <ClockValue>
        Dzisiaj jest {foramttedDate} roku, godzina: {formattedTime}.
      </ClockValue>
    </StyledClock>
  );
};

export default Clock;
