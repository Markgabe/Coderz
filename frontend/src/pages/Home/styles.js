import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #EBEDF3;
`;

export const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 85px);
  height: 100vh;
`;

export const CardArea = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  padding: 20px 150px;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;

  @media (max-width: 1366px) {
    gap: 60px;
  }

  @media (min-width: 1367px) {
    gap: 100px;
  }
`;
