import styled from "styled-components";

export const StyledConverter = styled.form`
  max-width: 90%;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.color.converterBackground};
  margin: 20px auto 10px;
  border-radius: 6px;
  padding: 10px 20px;
`;
