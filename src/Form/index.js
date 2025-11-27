import Buttons from "../Buttons/inbex.js";
import Output from "../Output/index.js";
import Input from "../Input/index.js";

const Form = ({
  currencies,
  amountPLN,
  onAmountChange,
  calculatedOutput,
  targetCurrencyCode,
  onCurrencyChange,
  onReset,
}) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <Input
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

export default Form;
