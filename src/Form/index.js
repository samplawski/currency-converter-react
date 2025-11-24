import "./style.css";
import Buttons from "../Buttons/inbex.js";
import Output from "../Output/index.js";

const Form = () => (
<form className="form js-form">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>

            <p>
              <label>
                <span className="form__labelText">Wybierz walutę:</span>
                <select
                  name="currency"
                  className="form__currencyField js-currency"
                >
                  <option value="USD">&#x24; USD</option>
                  <option value="EUR">&#8364; EUR</option>
                  <option value="GBP">&#163; GBP</option>
                </select>
              </label>
            </p>

            <p>
              <label>
                <span className="form__labelText">
                  Ile PLN chcesz wymienić:
                </span>
                <input
                  name="PLN"
                  className="form__currencyField js-exchangedPLN"
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  placeholder="Ile złotych wymieniasz?"
                />
              </label>
            </p>
          </fieldset>
          
          <Buttons/>
          
       <Output/>
        </form>
);

export default Form;