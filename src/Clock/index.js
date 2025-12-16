import { StyledClock, ClockValue } from "./styled.js";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const { foramttedDate, formattedTime } = useCurrentDate();

  return (
    <StyledClock>
      <ClockValue>
        Dzisiaj jest {foramttedDate} roku, godzina: {formattedTime}.
      </ClockValue>
    </StyledClock>
  );
};

export default Clock;
