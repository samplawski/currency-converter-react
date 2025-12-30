import React, { useState, useEffect } from "react";
import axios from "axios";
import { currencies } from "./currencies";
import StyledBody from "./Body";
import Table from "./Table";
import Converter from "./Converter";
import Footer from "./Footer";
import { StatusWrapper, LoadingStatus, ErrorStatus } from "./styledStatus.js";

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
    loading: true,
    error: null,
    date: null,
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
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
        setRates({
          data: null,
          loading: false,
          error: true,
          date: null,
        });
        console.error("Błąd pobierania:", error.message);
      }
    };

    const timeoutId = setTimeout(fetchRates, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  const getRate = (code) => {
    if (rates.data && rates.data[code]) {
      const valueFromApi = rates.data[code].value;
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
    if (convertedValue < 0.01) {
      return convertedValue.toFixed(20);
    } else {
      return convertedValue.toFixed(2);
    }
  };

  const tableCurrencies = currencies.map((currency) => {
    const rateFromApi = rates.data ? rates.data[currency.code]?.value : null;
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

  return (
    <StyledBody>
      {rates.loading ? (
        <StatusWrapper>
          <LoadingStatus>
            Moment... pobieram aktualne kursy walut z serwera. ⌚
          </LoadingStatus>
        </StatusWrapper>
      ) : rates.error ? (
        <StatusWrapper>
          <ErrorStatus>
            Hmm... Coś poszło nie tak 🤯 Sprawdź, czy masz połączenie z
            internetem. Jeśli masz... to wygląda na to, że to nasza wina. Możesz
            spróbować później? 😜
          </ErrorStatus>
        </StatusWrapper>
      ) : (
        <>
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
        </>
      )}
      <Footer />
    </StyledBody>
  );
}

export default App;
