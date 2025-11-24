import React from "react";
import TableContainer from "./TableContainer";
import Table from "./Table";
import Body from "./Body";
import Converter from "./Converter";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <Body>
      <TableContainer>
        <Table />
      </TableContainer>

      <Converter>
        <Form />
      </Converter>

      <Footer />
    </Body>
  );
}

export default App;
