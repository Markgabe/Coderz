import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #ebedf3;
`;

export const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 85px);
  height: 100vh;
  margin: auto;
  padding: 0 10px;
  align-items: center;
`;

export const SlotArea = styled.div`
  display: flex;
  width: 95%;
  height: calc(100vh - 140px);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;

  @media (max-width: 1366px) {
    gap: 60px;
  }

  @media (min-width: 1367px) {
    gap: 100px;
  }
`;
