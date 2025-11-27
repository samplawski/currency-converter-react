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
  onFormSubmit,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
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
