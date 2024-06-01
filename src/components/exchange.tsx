import React, { useState, useContext } from "react";
import { globalContext } from "../context/context";
import { CURRENCY_ACTIONS } from "../context/actions";
import { RiExchangeDollarLine } from "react-icons/ri";

//Exchange component is also a dropdown menu made with 98% tailwind and 2% css
// we are mapping through currencis array which is bassically the keys of the exchange rate object
// received from exchangerates API
// when user clicks one of the currency the currency is changed in the whole app using useReducer hook

const Exchange = () => {
  const { currencyData, setCurrencyData, rates } = useContext(globalContext);
  const currencies = Object.keys(rates ?? {});

  return (
    <div className="dropdown relative inline-block">
      <div className="dropbtn pr-0 md:pr-12 lg:pr-12 xl:pr-12 2xl:pr-12 ">
        <RiExchangeDollarLine />
      </div>
      <div className="dropdown-content absolute glass rounded-xl  max-h-44  overflow-y-auto overflow-x-hidden ">
        {currencies.map((currency, idx) => (
          <span
            className="option block hover:bg-zinc-100/25 hover:rounded-md  text-black px-3 py-3"
            key={idx}
            onClick={(e) => {
              setCurrencyData({
                ...currencyData,
                to: e.currentTarget.innerText,
                from: currencyData.to,
              });
            }}
          >
            {currency}
          </span>
        ))}
      </div>
    </div>
  );
};

// setCurrencyData({...currencyData, to:e.currentTarget.innerText.split(" ")[0], from: currencyData.to})
// ხელმისაწვდომი ვალუტებია: USD, EUR, GBP, GEL, JPY,

export default Exchange;
