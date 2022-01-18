import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  align-self: center;
  justify-self: center;

  animation: ${fadeAnimation} 0.5s;

  @media (max-height: 768px) {
    height: 80%;
  }
`;

export const BlocklyArea = styled.div`
  display: flex;
  width: 100%;
  height: 93%;

  @media (max-height: 768px) {
    height: 90%;
  }

  @media (max-width: 1000px) { 
    flex-direction: column;
  }
`;

export const BlocklyDiv = styled.div`
  width: 70%;
  height: 100%;
  
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const OutputArea = styled.textarea`
  cursor: text;
  width: 30%;
  height: 100%;
  padding: 10px;
  color: white;
  background-color: #333333;
  font-family: 'Anonymous Pro', monospace;
  resize: none;

  @media (max-width: 1000px) {
    width: 100%;
    height: 30%;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  background-color: #6699cc;
  height: 7%;

  @media (max-height: 768px) {
    height: 10%;
  }
`;

export const ChallengeInfo = styled.div`
  display: flex;

  h4 {
    margin-top: 10px;
    align-self: baseline;
    color: white;
    font-weight: 800;
    margin-left: 10px;
    font-size: 1.2em;
  }

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 10px;
    justify-content: center;

    p {
      color: white;
      font-weight: 500;
      font-size: 1.5em;
    }

    h6 {
      color: white;
      font-weight: 500;
      font-size: 1em;
    }
  }

  @media (max-width: 1000px) {
   display: none; 
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 20px;
  gap: 10px;
  
  @media (max-width: 1000px) {
    width: 100%;
    align-items: space-evenly;
    gap: 0;
    margin: 0;
  }
`;

export const StyledButton = styled.button`
  height: 100%;
  width: 100px;
  align-self: center;

  cursor: pointer;
  background-color: #5cbd66;
  border: none;

  p {
    color: white;
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    height: 100%;

    p {
      font-size: 0.8em;
    }
  }
`;
