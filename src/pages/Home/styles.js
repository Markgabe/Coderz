import styled from 'styled-components';

export const CardArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px 50px;
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
