import styled from "styled-components";

export const StatusWrapper = styled.div`
  background-color: white;
  border-radius: 6px;
  padding: 40px;
  margin: 50px auto;
  max-width: 800px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const LoadingStatus = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-size: 20px;
`;

export const ErrorStatus = styled.p`
  color: ${({ theme }) => theme.color.errorRed};
  font-size: 18px;
  line-height: 1.5;
`;
