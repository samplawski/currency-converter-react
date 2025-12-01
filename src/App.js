import React, { useState } from "react";
import Body from "./Body";
import Table from "./Table";
import Converter from "./Converter";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [currencies, setCurrencies] = useState([
    {
      id: 1,
      name: "United States dollar",
      namePL: "Dolar amerykański",
      code: "USD",
      symbol: "$",
      rate: 3.6491,
    },
    {
      id: 2,
      name: "Euro",
      namePL: "Euro",
      code: "EUR",
      symbol: "€",
      rate: 4.2274,
    },
    {
      id: 3,
      name: "Pound sterling",
      namePL: "Brytyjski funt szterling",
      code: "GBP",
      symbol: "£",
      rate: 4.8189,
    },
    {
      id: 4,
      name: "Bitcoin",
      namePL: "Bitcoin",
      code: "BTC",
      symbol: "₿",
      rate: 320727.6,
    },
  ]);

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

  return (
    <Body>
      <Table currencies={currencies} />

      <Converter>
        <Form
          currencies={currencies}
          amountPLN={amountPLN}
          onAmountChange={handleAmountChange}
          calculatedOutput={calculatedOutput}
          onCurrencyChange={handleCurrencyChange}
          targetCurrencyCode={targetCurrencyCode}
          onReset={handleReset}
          onFormSubmit={handleFormSubmit}
        />
      </Converter>

      <Footer />
    </Body>
  );
}

export default App;
