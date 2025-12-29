import React, { useState, useEffect } from "react";
import { currencies } from "./currencies";
import StyledBody from "./Body";
import Table from "./Table";
import Converter from "./Converter";
import Footer from "./Footer";

function App() {
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
    const currency = currencies.find((currency) => currency.code === code);
    if (!currency) {
      console.error(`Nie znaleziono waluty o kodzie: ${code}`);
      return 1.0;
    }
    return currency.rate;
  };

  const countOutput = (amountPLN, targetCurrencyCode) => {
    const rate = getRate(targetCurrencyCode);
    const amount = parseFloat(amountPLN);
    if (isNaN(amount) || amount <= 0) return 0;
    const convertedValue = amount / rate;
    if (convertedValue < 0.01) {
      return convertedValue.toFixed(8);
    } else {
      return convertedValue.toFixed(2);
    }
  };

  const calculatedOutput = countOutput(confirmedAmountPLN, targetCurrencyCode);

  const handleReset = () => {
    setAmountPLN("");
    setConfirmedAmountPLN("");
    setTargetCurrencyCode("USD");
  };

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/rates.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Problem z pobraniem pliku.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Błąd:", error);
      });
  }, []);

  return (
    <StyledBody>
      <Table currencies={currencies} />

      <Converter
        currencies={currencies}
        amountPLN={amountPLN}
        onAmountChange={handleAmountChange}
        calculatedOutput={calculatedOutput}
        onCurrencyChange={handleCurrencyChange}
        targetCurrencyCode={targetCurrencyCode}
        onReset={handleReset}
        onFormSubmit={handleFormSubmit}
      />

      <Footer />
    </StyledBody>
  );
}

export default App;
