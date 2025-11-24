import "./style.css";

const Table = () => (
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
          {/* Aktualny kurs aktualny kurs walut wpisywać w script.js:12:14, 13:14, 14:15) */}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr className="table__row">
        <th className="table__header" scope="row">
          United States dollar
        </th>
        <td className="table__cell">Dolar amerykański</td>
        <td className="table__cell">USD</td>
        <td className="table__cell">&#x24;</td>
        <td className="table__cell js-USD"></td>
      </tr>

      <tr className="table__row">
        <th className="table__header" scope="row">
          Euro
        </th>
        <td className="table__cell">Euro</td>
        <td className="table__cell">EUR</td>
        <td className="table__cell">&#8364;</td>
        <td className="table__cell js-EUR"></td>
      </tr>

      <tr className="table__row">
        <th className="table__header" scope="row">
          Pound sterling
        </th>
        <td className="table__cell">Brytyjski funt szterling</td>
        <td className="table__cell">GBP</td>
        <td className="table__cell">&#163;</td>
        <td className="table__cell js-GBP"></td>
      </tr>
    </tbody>
  </table>
);

export default Table;
