import "./style.css";

const Input = ({
  currencies,
  amountPLN,
  onAmountChange,
  onCurrencyChange,
  targetCurrencyCode,
}) => (
  <fieldset className="form__fieldset">
    <legend className="form__legend">Kalkulator walut</legend>

    <p>
      <label>
        <span className="form__labelText">Wybierz walutę:</span>
        <select
          className="form__currencyField"
          id="targetCurrency"
          name="targetCurrency"
          value={targetCurrencyCode}
          onChange={({ target }) => onCurrencyChange(target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.id} value={currency.code}>
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
          id="amountPLN"
          name="amountPLN"
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
