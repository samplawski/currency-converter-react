import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledClock = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
  margin: 10px 0;
  color: ${({ theme }) => theme.color.text};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    justify-content: center;
    text-align: center;
    line-height: 1.3;
  }
`;

export const ApiFetchDate = styled.div`
  text-align: center;
  padding: 0 10px;
  margin: 30px 0 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    line-height: 1.3;
  }
`;
