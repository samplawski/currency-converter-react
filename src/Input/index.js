import "./style.css";

const Input = ({ currencies, amountPLN, onAmountChange }) => (
  <fieldset className="form__fieldset">
    <legend className="form__legend">Kalkulator walut</legend>

    <p>
      <label>
        <span className="form__labelText">Wybierz walutę:</span>
        <select className="form__currencyField">
          {currencies.map((currency) => (
            <option key={currency.id}>
              {currency.symbol} {currency.code}
            </option>
          ))}
        </select>
      </label>
    </p>

    <p>
      <label>
        <span className="form__labelText">Ile PLN chcesz wymienić:</span>
        <input
          onChange={({ target }) => onAmountChange(target.value)}
          value={amountPLN}
          className="form__currencyField"
          type="number"
          required
          min="0"
          step="0.01"
          placeholder="Ile złotych wymieniasz?"
        />
      </label>
    </p>
  </fieldset>
);

export default Input;
