import Buttons from "../Buttons/inbex.js";
import Output from "../Output/index.js";
import Input from "../Input/index.js";

const Form = ({
  currencies,
  amountPLN,
  onAmountChange,
  calculatedOutput,
  targetCurrencyChange,
  onCurrencyChange,
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
      />
      <Buttons />
      <Output
        amountPLN={amountPLN}
        calculatedOutput={calculatedOutput}
        targetCurrencyChange={targetCurrencyChange}
        onCurrencyChange={onCurrencyChange}
      />
    </form>
  );
};

export default Form;
