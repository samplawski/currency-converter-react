import "./style.css";

const Table = ({ currencies }) => (
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
          {/* aktualny kurs walut wpisywać App.js w liniach: 17, 25, 33) */}
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
          <td className="table__cell">{currency.rate.toFixed(2)} zł</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;