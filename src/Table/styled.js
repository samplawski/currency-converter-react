import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 90%;
  overflow-x: auto;
  background-color: hsl(197, 100%, 99%);
  margin: 20px auto 10px;
  border-radius: 6px;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Row = styled.tr`
  background-color: hsl(0, 24%, 94%);

  :hover {
    background-color: hsl(0, 21%, 89%);
  }
`;

export const Header = styled.th`
  border-style: groove;
  background-color: hsl(0, 20%, 79%);
`;

export const Cell = styled.td`
  border-style: solid;
  border-width: 2px;
  border-color: hsl(0, 0%, 67%);
  text-align: center;
`;

export const StyledCaption = styled.caption`
  margin: 5px;
  padding: 2px;
`;
