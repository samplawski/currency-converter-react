import Buttons from "../Buttons/inbex.js";
import Output from "../Output/index.js";
import Input from "../Input/index.js";

const Form = ({ currencies, amountPLN, onAmountChange }) => {
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
      <Output amountPLN={amountPLN} />
    </form>
  );
};

export default Form;
