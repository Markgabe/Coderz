import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const CategoryImage = styled.img`
  width: 200px;
  height: 100%;
  object-fit: none;
  clip-path: polygon(0 0, 0 100%, 70% 100%, 100% 0);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const ChallengeHeader = styled.div`
  margin-top: 20px;

  h2 {
    color: #003B6D;
    font-weight: 200;
    text-transform: uppercase;
    font-size: 2em;
  }

  h3 {
    color: #676767;
    font-weight: 400;
    font-size: 1.5em;
  }
`;

export const ChallengeTitle = styled.p`
  margin-top: auto;
  margin-bottom: 30px;

  color: #003B6D;
  font-size: 1.8em;
`;

export const PlayButton = styled(Link)`
  margin-bottom: 30px;
  border: none;
  border-radius: 10px;
  padding: 5px;
  background-color: #6699CC;
  height: 40px;
  text-decoration: none;
  display: flex;

  p {
    margin: auto;
    color: white;
    font-size: 1.4em;
    font-weight: 200;
  }

  &:hover {
    filter: brightness(110%);
  }
`;
