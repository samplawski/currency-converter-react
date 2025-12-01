import "./style.css";

const formatCurrencyRate = (rate) => {
  // 1. Ustawienie lokalizacji na polską (pl-PL)
  // 2. Ustawienie 2 cyfr po przecinku (jak toFixed(2))
  return new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rate);
};

const Table = ({ currencies }) => (
  <div className="table-wrapper">
    <table className="table">
      <caption className="table__caption">Waluty w kalkulatorze.</caption>
      <thead>
        <tr className="table__row">
          <th className="table__header" scope="col">
            Nazwa waluty (angielska)
          </th>
          <th className="table__header" scope="col">
            Nazwa waluty (polska)
          </th>
          <th className="table__header" scope="col">
            Oznaczenie międzynarodowe
          </th>
          <th className="table__header" scope="col">
            Symbol
          </th>
          <th className="table__header" scope="col">
            Aktualny kurs
          </th>
        </tr>
      </thead>

      <tbody>
        {currencies.map((currency) => (
          <tr key={currency.id} className="table__row">
            <th className="table__header" scope="row">
              {currency.name}
            </th>
            <td className="table__cell">{currency.namePL}</td>
            <td className="table__cell">{currency.code}</td>
            <td className="table__cell">{currency.symbol}</td>
            <td className="table__cell">{formatCurrencyRate(currency.rate.toFixed(2))} zł</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
