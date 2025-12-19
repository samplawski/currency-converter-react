import styled from "styled-components";

export const StyledClock = styled.p`
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
  margin: 10px 0;
`;

export const ClockValue = styled.span`
  color: ${({ theme }) => theme.color.clockText};
`;
