import { useState, useEffect } from "react";
import axios from "axios";
import { currencies } from "./currencies";

export const useRatesData = () => {
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
          "./rates.json"

          //   `https://api.currencyapi.com/v3/latest?apikey=cur_live_DegcTyHcxMdZeycj1wbLpgcmdBhiR3Y2qzgTkkQ9&currencies=&base_currency=PLN`
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

  return rates;
};
