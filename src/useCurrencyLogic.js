import { useState } from "react";
import { currencies } from "./currencies";

export const useCurrencyLogic = (ratesData) => {
  const [amountPLN, setAmountPLN] = useState("");

  const [confirmedAmountPLN, setConfirmedAmountPLN] = useState("");

  const [targetCurrencyCode, setTargetCurrencyCode] = useState("USD");

  const handleAmountChange = (newAmount) => {
    setAmountPLN(newAmount);
  };

  const handleCurrencyChange = (newCurrencyCode) => {
    setTargetCurrencyCode(newCurrencyCode);
  };

  const handleFormSubmit = () => {
    setConfirmedAmountPLN(amountPLN);
  };

  const getRate = (code) => {
    if (ratesData && ratesData[code]) {
      const valueFromApi = ratesData[code].value;
      const rawRate = 1 / valueFromApi;
      const roundedRate = parseFloat(rawRate.toFixed(2));
      return roundedRate > 0 ? roundedRate : rawRate;
    }
    const currency = currencies.find((currency) => currency.code === code);
    if (!currency) {
      console.error(`Nie znaleziono waluty o kodzie: ${code}`);
      return currency ? currency.rate : 1.0;
    }
  };

  const countOutput = (amountPLN, targetCurrencyCode) => {
    const rate = getRate(targetCurrencyCode);
    const amount = parseFloat(amountPLN);
    if (isNaN(amount) || amount <= 0) return 0;
    const convertedValue = amount / rate;

    return convertedValue < 0.01
      ? convertedValue.toFixed(20)
      : convertedValue.toFixed(2);
  };

  const tableCurrencies = currencies.map((currency) => {
    const rateFromApi = ratesData ? ratesData[currency.code]?.value : null;
    let rate = currency.rate;

    if (rateFromApi) {
      const rawRate = 1 / rateFromApi;
      const roundedRate = parseFloat(rawRate.toFixed(2));
      rate = roundedRate > 0 ? roundedRate : parseFloat(rawRate.toFixed(6));
    }

    return {
      ...currency,
      rate: rate,
    };
  });

  const calculatedOutput = countOutput(confirmedAmountPLN, targetCurrencyCode);

  const handleReset = () => {
    setAmountPLN("");
    setConfirmedAmountPLN("");
    setTargetCurrencyCode("USD");
  };

  return {
    amountPLN,
    targetCurrencyCode,
    calculatedOutput,
    handleAmountChange,
    handleCurrencyChange,
    handleFormSubmit,
    handleReset,
    tableCurrencies,
  };
};
