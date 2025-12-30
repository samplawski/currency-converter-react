import Clock from "../Clock/index.js";

import {
  Wrapper,
  StyledTable,
  Row,
  Header,
  Cell,
  StyledCaption,
} from "./styled.js";

const formatCurrencyRate = (rate) => {
  // 1. Ustawienie lokalizacji na polską (pl-PL)
  // 2. Ustawienie 2 cyfr po przecinku (jak toFixed(2))
  return new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rate);
};

const Table = ({ currencies }) => (
  <Wrapper>
    <Clock />
    <StyledTable>
      <StyledCaption>Waluty w kalkulatorze.</StyledCaption>
      <thead>
        <Row>
          <Header scope="col">Nazwa waluty (angielska)</Header>
          <Header scope="col">Nazwa waluty (polska)</Header>
          <Header scope="col">Oznaczenie międzynarodowe</Header>
          <Header scope="col">Symbol</Header>
          <Header scope="col">Aktualny kurs</Header>
        </Row>
      </thead>

      <tbody>
        {currencies.map((currency) => (
          <Row key={currency.id}>
            <Header scope="row">{currency.name}</Header>
            <Cell>{currency.namePL}</Cell>
            <Cell>{currency.code}</Cell>
            <Cell>{currency.symbol}</Cell>
            <Cell>{formatCurrencyRate(currency.rate)} zł</Cell>
          </Row>
        ))}
      </tbody>
    </StyledTable>
  </Wrapper>
);

export default Table;
