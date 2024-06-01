import React, { useState, useEffect } from "react";
import { ExchangesRates, CurrencyData } from "../types/types";

// with this hook we are fetching data from exchangerate's latest endpoint
// end returning the relevant values

const useExchangeRates = (): [
  CurrencyData,
  React.Dispatch<React.SetStateAction<CurrencyData>>,
  ExchangesRates
] => {
  const [rates, setRates] = useState<ExchangesRates>({} as ExchangesRates);

  const [currencyData, setCurrencyData] = useState<CurrencyData>({
    to: "GEL",
    from: "GEL",
  });

  const fetchExchange = async () => {
    const URL = "https://api.exchangerate.host/latest";
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data.rates);

    setRates(data.rates);
  };

  useEffect(() => {
    fetchExchange();
  }, []);

  return [currencyData, setCurrencyData, rates];
};

export default useExchangeRates;
