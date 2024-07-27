import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
`;

export const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 0 1rem;
  background: ${({ theme }) => theme.background};
`;
