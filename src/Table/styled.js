import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 90%;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.color.tableBackground};
  margin: 20px auto 10px;
  border-radius: 6px;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Row = styled.tr`
  background-color: ${({ theme }) => theme.color.tableRow};

  :hover {
    background-color: ${({ theme }) => theme.color.rowHover};
  }
`;

export const Header = styled.th`
  border-style: groove;
  background-color: ${({ theme }) => theme.color.tableHeader};
`;

export const Cell = styled.td`
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.color.cellBorder};
  text-align: center;
`;

export const StyledCaption = styled.caption`
  margin: 5px;
  padding: 2px;
`;
