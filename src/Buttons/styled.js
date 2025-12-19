import styled from "styled-components";

export const Button = styled.button`
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.buttonBackground};
  padding: 4px;

  &:hover {
    filter: brightness(80%);
  }

  &:active {
    filter: brightness(70%);
  }
`;
