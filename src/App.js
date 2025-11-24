import React from "react";
import TableContainer from "./TableContainer";
import Table from "./Table";
import Body from "./Body";
import Converter from "./Converter";


function App() {
  return (
    <Body>
      <TableContainer className="tableContainer">
        <Table />
      </TableContainer>

      <Converter className="converter">
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
          <p>
            <button
              className="form__button"
              type="submit"
              value="Przelicz"
              title="Przelicz"
            >
              Przelicz
            </button>
          </p>
          <p>
            <button
              className="form__button"
              type="reset"
              value="Wyczyść"
              title="Wyczyść"
            >
              Wyczyść
            </button>
          </p>
          <p>
            <label>
              Po przewalutowaniu dostaniesz:
              <strong className="js-output">
                Wybierz walutę i wpisz kwotę do wymiany.
              </strong>
            </label>
          </p>
        </form>
      </Converter>

      <footer className="footer">
        <p className="footer__name">Tomasz Sampławski 2023</p>
        <p>
          <a
            className="footer__link"
            href="mailto:tsamplawski@gmail.com"
            title="tworzy wiadomość zaadresowaną do mnie"
          >
            wyślij do mnie wiadomość
          </a>
        </p>
        <p>
          <a
            href="https://github.com/samplawski/currency-converter"
            title="otwiera stronę projektu na GitHub"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              className="footer__link footer__link--git"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub-icon"
            />
          </a>
        </p>
      </footer>
    </Body>
  );
}

export default App;
