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
   const handleAmountChange = (newAmount) => {
    setAmountPLN(newAmount)
   };

   
//   const countOutput = (amountPLN, targetCurrency) => {
//         const rate = getRate(targetCurrency)
//         return amountPLN / rate;
//     };

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
        />
      </Converter>

      <Footer />
    </Body>
  );
}

export default App;