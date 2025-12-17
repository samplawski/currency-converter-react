import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  max-width: 90%;
  overflow-x: auto;
  background-color: hsl(37, 74%, 90%);
  margin: 170px auto 10px;
  border-radius: 6px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: flex-end;
  text-align: center;
  font-size: 15px;
  letter-spacing: 0.1em;
`;

export const Link = styled.a`
  color: hsl(182, 25%, 50%);
  text-decoration: none;

  &:hover {
    color: hsl(182, 25%, 35%);
    border-bottom: 1px solid;
    outline: none;
  }

  ${({ $git }) => $git && css`
      img {
        max-width: 30px;
        max-height: 30px;
        border-radius: 50%;
      }

      &:hover {
        text-decoration: none;
        border-bottom: none;
      }
    `}
`;
