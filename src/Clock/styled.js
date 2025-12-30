import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledClock = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
  margin: 10px 0;
`;

export const ClockValue = styled.span`
  color: ${({ theme }) => theme.color.text};
`;

export const ApiFetchDate = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  margin: 30px 0 10px;
`;
