import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  display: flex;
  flex-grow: 1;

  @media (max-width: 1366px) {
    min-width: 400px;
    min-height: 200px;
  }

  @media (min-width: 1367px) {
    min-width: 500px;
    min-height: 300px;
  }

  background-color: white;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);

  animation: ${fadeAnimation} 0.5s;
`;
