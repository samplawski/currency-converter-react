import React, { useState } from "react";
import Body from "./Body";
import TableContainer from "./TableContainer";
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

  const [targetCurrencyCode, setTargetCurrencyCode] = useState("USD");

  const handleAmountChange = (newAmount) => {
    setAmountPLN(newAmount);
  };

  const handleCurrencyChange = (newCurrencyCode) => {
    setTargetCurrencyCode(newCurrencyCode);
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
    return convertedValue.toFixed(2);
  };

  const calculatedOutput = countOutput(amountPLN, targetCurrencyCode);

  return (
    <Body>
      <TableContainer>
        <Table currencies={currencies} />
      </TableContainer>

      <Converter>
        <Form
          currencies={currencies}
          amountPLN={amountPLN}
          onAmountChange={handleAmountChange}
          calculatedOutput={calculatedOutput}
          onCurrencyChange={handleCurrencyChange}
          targetCurrencyChange={targetCurrencyCode}
        />
      </Converter>

      <Footer />
    </Body>
  );
}

export default App;
