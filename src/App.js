import React from "react";
import TableContainer from "./TableContainer";
import Table from "./Table";
import Body from "./Body";
import Converter from "./Converter";
import Form from "./Form";


function App() {
  return (
    <Body>
      <TableContainer className="tableContainer">
        <Table />
      </TableContainer>

      <Converter className="converter">
         <Form/>
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
