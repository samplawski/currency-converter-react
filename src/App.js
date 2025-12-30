import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const [rates, setRates] = useState({
    data: null,
    loading: false,
    error: null,
    date: null,
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setRates((previousRatesData) => ({
          ...previousRatesData,
          loading: true,
        }));
        const response = await axios.get(
          `${process.env.PUBLIC_URL}/rates.json`
        );
        setRates({
          data: response.data.data,
          loading: false,
          error: null,
          date: response.data.meta.last_updated_at,
        });
        console.log("Dane pobrane Axiosem:", response.data);
      } catch (error) {
        console.error("Błąd pobierania:", error.message);
      }
    };

    const timeoutId = setTimeout(fetchRates, 1500);

    return () => clearTimeout(timeoutId);
    fetchRates();
  }, []);

  const getRate = (code) => {
    if (rates.data && rates.data[code]) {
      const valueFromApi = rates.data[code].value;
      return 1 / valueFromApi;
    }
    const currency = currencies.find((currency) => currency.code === code);
    if (!currency) {
      console.error(`Nie znaleziono waluty o kodzie: ${code}`);
      return currency.rate;
    }
    return 1.0;
  };

  const countOutput = (amountPLN, targetCurrencyCode) => {
    const rate = getRate(targetCurrencyCode);
    const amount = parseFloat(amountPLN);
    if (isNaN(amount) || amount <= 0) return 0;
    const convertedValue = amount / rate;
    if (convertedValue < 0.01) {
      return convertedValue.toFixed(20);
    } else {
      return convertedValue.toFixed(2);
    }
  };

  const tableCurrencies = currencies.map((currency) => {
    const rateFromApi = rates.data ? rates.data[currency.code]?.value : null;
    return {
      ...currency,
      // Dla tabeli: ile PLN za 1 walutę (1 / 0.23 = 4.34)
      rate: rateFromApi ? (1 / rateFromApi).toFixed(2) : currency.rate,
    };
  });

  const calculatedOutput = countOutput(confirmedAmountPLN, targetCurrencyCode);

  const handleReset = () => {
    setAmountPLN("");
    setConfirmedAmountPLN("");
    setTargetCurrencyCode("USD");
  };

  return (
    <StyledBody>
      <Table currencies={tableCurrencies} ratesDate={rates.date} />

      <Converter
        currencies={tableCurrencies}
        amountPLN={amountPLN}
        onAmountChange={handleAmountChange}
        calculatedOutput={calculatedOutput}
        onCurrencyChange={handleCurrencyChange}
        targetCurrencyCode={targetCurrencyCode}
        onReset={handleReset}
        onFormSubmit={handleFormSubmit}
        rates={rates.data}
      />

      <Footer />
    </StyledBody>
  );
}

export default App;
