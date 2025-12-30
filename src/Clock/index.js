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

  const foramttedDate = date.toLocaleDateString("pl-PL", formDate);
  const formattedTime = date.toLocaleTimeString("pl-PL", formTime);

  const apiDateObject = ratesDate ? new Date(ratesDate) : null;

  const formattedApiDate = apiDateObject
    ? apiDateObject.toLocaleDateString("pl-PL", formDate)
    : null;

  const formattedApiTime = apiDateObject
    ? apiDateObject.toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <Wrapper>
      <StyledClock>
        <ClockValue>
          Dzisiaj jest {foramttedDate} roku, godzina: {formattedTime}.
        </ClockValue>
      </StyledClock>

      <ApiFetchDate>
        {apiDateObject ? (
          <>
            Kursy walut pobierane są z serwisu zewnętrznego. Ostatnia&nbsp;
            <strong>aktualizacja</strong>: {formattedApiDate} roku, o godzinie:{" "}
            {formattedApiTime}.
          </>
        ) : (
          "Ładowanie danych aktualizacji..."
        )}
      </ApiFetchDate>
    </Wrapper>
  );
};

export default Clock;
