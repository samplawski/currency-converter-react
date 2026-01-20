import { useState, useEffect } from "react";
import axios from "axios";

const STORAGE_KEY = "rates-cache";

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
        const cachedData = localStorage.getItem(STORAGE_KEY);

        if (cachedData) {
          const parsedData = JSON.parse(cachedData);

          const now = new Date();
          const lastUpdate = new Date(parsedData.meta.last_updated_at);
          const todayDeadline = new Date();
          todayDeadline.setHours(1, 0, 0, 0);

          let isCacheValid = false;

          if (now < todayDeadline) {
            isCacheValid = true;
          } 
          
          else {
            isCacheValid = lastUpdate.toDateString() === now.toDateString();
          }

          if (isCacheValid) {
            setRates({
              data: parsedData.data,
              loading: false,
              error: null,
              date: parsedData.meta.last_updated_at,
            });
            console.log(
              "W localStorage masz już kursy z dzisiaj. Oszczędzm API."
            );
            return;
          }
        }

        const response = await axios.get(
          // "./rates.json"

          `https://api.currencyapi.com/v3/latest?apikey=cur_live_DegcTyHcxMdZeycj1wbLpgcmdBhiR3Y2qzgTkkQ9&currencies=&base_currency=PLN`
        );
        localStorage.setItem(STORAGE_KEY, JSON.stringify(response.data));

        setRates({
          data: response.data.data,
          loading: false,
          error: null,
          date: response.data.meta.last_updated_at,
        });
        console.log(
          "Dane pobrane Axiosem i zaktualizowane w cache:",
          response.data
        );
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
