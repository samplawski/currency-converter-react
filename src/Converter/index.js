import "./style.css";

import Buttons from "../Buttons/index.js";
import Output from "../Output/index.js";
import CurrencyInputArea from "../CurrencyInputArea/index.js";

const Converter = ({
  currencies,
  amountPLN,
  onAmountChange,
  calculatedOutput,
  targetCurrencyCode,
  onCurrencyChange,
  onReset,
  onFormSubmit,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };
  return (
    <form className="converter" onSubmit={handleSubmit}>
      <CurrencyInputArea
        currencies={currencies}
        amountPLN={amountPLN}
        onAmountChange={onAmountChange}
        targetCurrencyCode={targetCurrencyCode}
        onCurrencyChange={onCurrencyChange}
      />
      <Buttons onReset={onReset} />
      <Output
        calculatedOutput={calculatedOutput}
        targetCurrencyCode={targetCurrencyCode}
        currencies={currencies}
      />
    </form>
  );
};

export default Converter;
