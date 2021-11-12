import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 95%;
  height: 85%;
  align-self: center;
  justify-self: center;

  background-color: white;
`;

export const BlocklyDiv = styled.div`
  height: 93%;
  width: 100%;
  background: transparent;
`;

export const Menu = styled.div`
  display: flex;
  height: 7%;
  width: 100%;
  background-color: #6699cc;
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
`;

export const SubmitButton = styled.button`
  height: 100%;
  width: 100px;
  align-self: center;
  margin-left: auto;
  margin-right: 20px;

  background-color: #5cbd66;
  border: none;

  p {
    color: white;
    font-weight: bold;
  }
`;
