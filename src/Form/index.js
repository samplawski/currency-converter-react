import "./style.css";
import Buttons from "../Buttons/inbex.js";
import Output from "../Output/index.js";
import Input from "../Input/index.js";

const Form = () => (
  <form className="form js-form">
    <Input />
    <Buttons />
    <Output />
  </form>
);

export default Form;
