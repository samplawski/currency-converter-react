import {
  Fieldset,
  Legend,
  LabelText,
  SelectField,
  InputField,
} from "./styled.js";

const CurrencyInputArea = ({
  currencies,
  amountPLN,
  onAmountChange,
  onCurrencyChange,
  targetCurrencyCode,
}) => (
  <Fieldset>
    <Legend>Kalkulator walut</Legend>

    <p>
      <label>
        <LabelText>Wybierz walutę:</LabelText>
        <SelectField
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
        </SelectField>
      </label>
    </p>

    <p>
      <label>
        <LabelText>Ile PLN chcesz wymienić:</LabelText>
        <InputField
          onChange={({ target }) => onAmountChange(target.value)}
          value={amountPLN}
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
  </Fieldset>
);

export default CurrencyInputArea;
