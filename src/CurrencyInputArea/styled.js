import styled, { css } from "styled-components";

export const Fieldset = styled.fieldset`
  border-radius: 3px;
`;

export const Legend = styled.legend`
  border-radius: 3px;
  background-color: hsl(39, 51%, 68%);
  padding: 4px 8px;
`;

export const LabelText = styled.span`
  width: 100%;
  max-width: 240px;
  display: inline-block;
  margin: 0 auto;
`;

const CommonFieldStyles = css`
  border: 2px solid #ccc;
  padding: 6px;
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
  margin-left: 5px;

  @media (max-width: 848px) {
    margin-left: 0px;
  }
`;

export const SelectField = styled.select`
  ${CommonFieldStyles}
`;

export const InputField = styled.input`
  ${CommonFieldStyles}
`;
