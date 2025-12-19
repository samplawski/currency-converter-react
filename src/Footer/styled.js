import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  max-width: 90%;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.color.footerBackground};
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
  color: ${({ theme }) => theme.color.footerLink};
  text-decoration: none;

  &:hover {
    filter: brightness(80%);
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
