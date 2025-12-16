import styled from "styled-components";

export const Button = styled.button`
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
  border: none;
  border-radius: 3px;
  background-color: hsl(39, 51%, 68%);
  padding: 4px;

  &:hover {
    background-color: hsl(39, 51%, 48%);
  }

  &:active {
    background-color: hsl(39, 51%, 38%);
  }
`;
