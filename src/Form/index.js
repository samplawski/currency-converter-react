import Buttons from "../Buttons/inbex.js";
import Output from "../Output/index.js";
import Input from "../Input/index.js";

const Form = ({currencies}) => (
  <form className="form">
    <Input currencies={currencies}/>
    <Buttons />
    <Output />
  </form>
);

export default Form;