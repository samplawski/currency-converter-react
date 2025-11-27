const getCurrencySymbol = (currencies, code) => {
  const currency = currencies.find((currency) => currency.code === code);
  return currency ? currency.symbol : "";
};

const Output = ({ currencies, calculatedOutput, targetCurrencyCode }) => {
  const symbol = getCurrencySymbol(currencies, targetCurrencyCode);

  const isInitial = calculatedOutput === "0" || calculatedOutput === 0.0;
  let resultMessage;

  if (isInitial) {
    resultMessage = "Wybierz walutę i wpisz kwotę do wymiany.";
  } else {
    resultMessage = `${calculatedOutput} ${symbol} (${targetCurrencyCode})`;
  }
  return (
    <label>
      Po przewalutowaniu dostaniesz: <strong>{resultMessage}</strong>
    </label>
  );
};

export default Output;
