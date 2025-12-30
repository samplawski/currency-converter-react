import {
  Fieldset,
  Legend,
  LabelText,
  SelectField,
  InputField,
} from "./styled.js";

const CurrencyInputArea = ({
  amountPLN,
  onAmountChange,
  onCurrencyChange,
  targetCurrencyCode,
  rates,
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
          {rates &&
            Object.keys(rates).map((currencyCode) => (
              <option key={currencyCode} value={currencyCode}>
                {currencyCode}
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
