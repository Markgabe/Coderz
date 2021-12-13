import React from 'react';

import {
  Container,
  ImageContainer,
  CategoryImage,
  ChallengeHeader,
  ChallengeTitle,
  PlayButton,
  InfoContainer,
} from './styles';

import { getByName } from '../../utils/Categories';

export default function NextChallenge({
  challenge: { category, name, level, id },
}) {
  return (
    <Container>
      <ImageContainer>
        <CategoryImage src={getByName(category).image} />
      </ImageContainer>
      <InfoContainer>
        <ChallengeHeader>
          <h2>{getByName(category).label}</h2>
          <h3>Dificuldade {level}</h3>
        </ChallengeHeader>
        <ChallengeTitle>{name}</ChallengeTitle>
        <PlayButton to={`challenge/${id}`}>
          <p>Jogar agora</p>
        </PlayButton>
      </InfoContainer>
    </Container>
  );
}
