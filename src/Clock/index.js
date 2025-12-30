import { Wrapper, StyledClock, ClockValue, ApiFetchDate } from "./styled.js";
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

const Clock = ({ ratesDate }) => {
  const { date } = useCurrentDate();
  const formattedCurrentDate = date.toLocaleDateString("pl-PL", formDate);
  const formattedCurrentTime = date.toLocaleTimeString("pl-PL", formTime);

  const apiDateObject = new Date(ratesDate);
  const formattedApiDate = apiDateObject.toLocaleDateString("pl-PL", formDate);
  const formattedApiTime = apiDateObject.toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Wrapper>
      <StyledClock>
        <ClockValue>
          Dzisiaj jest {formattedCurrentDate} roku, godzina:{" "}
          {formattedCurrentTime}.
        </ClockValue>
      </StyledClock>

      <ApiFetchDate>
        Kursy walut pobierane są z serwisu zewnętrznego. Ostatnia&nbsp;
        <strong>aktualizacja</strong>: {formattedApiDate} roku, o godzinie:{" "}
        {formattedApiTime}.
      </ApiFetchDate>
    </Wrapper>
  );
};

export default Clock;
