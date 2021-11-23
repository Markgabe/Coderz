import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

export const ChallengeCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 30px;
  padding: 20px;

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

  p {
    margin: 10px 0;
  }

  button {
    background: #6699cc;
    width: 200px;
    border: none;
    color: white;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    margin: auto auto 0 0;
    height: 30px;
  }
`;
