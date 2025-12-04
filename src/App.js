import React, { useState } from "react";
import { currencies } from "./currencies";
import Body from "./Body";
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

  const myDate = new Date();
        console.log(myDate.toLocaleString());

  return (
    <Body>
      <div className="mainContentWrapper">
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
      </div>
    </Body>
  );
}

export default App;
