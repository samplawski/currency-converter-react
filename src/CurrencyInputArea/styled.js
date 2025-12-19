import styled, { css } from "styled-components";

export const Fieldset = styled.fieldset`
  border-radius: 3px;
`;

export const Legend = styled.legend`
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.legendBackground};
  padding: 4px 8px;
`;

export const LabelText = styled.span`
  width: 100%;
  max-width: 240px;
  display: inline-block;
  margin: 0 auto;
`;

const CommonFieldStyles = css`
  border: 2px solid ${({ theme }) => theme.color.borderColor};
  padding: 6px;
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
  margin-left: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-left: 0px;
  }
`;

export const SelectField = styled.select`
  ${CommonFieldStyles}
`;

export const InputField = styled.input`
  ${CommonFieldStyles}
`;
