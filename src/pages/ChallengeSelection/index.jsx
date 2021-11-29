/* eslint-disable function-paren-newline */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import {
  Container,
  ChallengeArea,
  ChallengeCompleted,
  ChallengeTitle,
  ChallengeGainedXP,
  ChallengeCard,
  CategoryGroup,
  CategoryCard,
  CategoryLabel,
  CategoryIcon,
  VerticalSeparator,
} from './styles';

import BaseScreen from '../../components/BaseScreen';

import api from '../../services/api';

import Categories from '../../utils/Categories';
import { groupBy } from '../../utils/ArrayUtils';

export default function Challenge() {
  const [challengeMap, setChallengeMap] = useState([]);
  const [selected, setSelected] = useState('math');

  const COMPLETED_CHALLENGE_RATIO = 0.2;

  useEffect(async () => {
    try {
      const { data } = await api.get('/challenges');
      setChallengeMap(groupBy(data, (d) => d.category));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, []);

  const renderChallenge = (challenge) => (
    <ChallengeCard key={challenge.id}>
      <ChallengeTitle>
        <h2>{challenge.name}</h2>
        {challenge.successfulSubmissions > 0 && (
          <ChallengeCompleted data-tip='Desafio completo!' />
        )}
      </ChallengeTitle>
      <p>{challenge.description}</p>
      <div>
        <ChallengeGainedXP completed={challenge.successfulSubmissions > 0}>
          <h4>+{challenge.gainedXP}XP</h4>
          {challenge.successfulSubmissions > 0 && (
            <h4>
              +{parseInt(challenge.gainedXP * COMPLETED_CHALLENGE_RATIO, 10)}XP
            </h4>
          )}
        </ChallengeGainedXP>
        <Link to={`/challenge/${challenge.id}`}>
          {challenge.successfulSubmissions > 0
            ? 'Fazer novamente!'
            : 'Quero tentar!'}
        </Link>
      </div>
    </ChallengeCard>
  );

  const renderCategory = (category) => (
    <CategoryCard
      key={category.index}
      color={category.color}
      selected={selected === category.name}
      onClick={() => setSelected(category.name)}
    >
      <CategoryLabel>{category.label}</CategoryLabel>
      <CategoryIcon svg={category.icon} />
    </CategoryCard>
  );

  return (
    <BaseScreen activePage='challenge'>
      <Container>
        <ReactTooltip />
        <CategoryGroup>
          {Categories.map((category) => renderCategory(category))}
        </CategoryGroup>

        <VerticalSeparator />

        <ChallengeArea>
          {Array.from(challengeMap).map(
            ([category, challenges]) =>
              category === selected &&
              challenges.map((challenge) => renderChallenge(challenge))
          )}
        </ChallengeArea>
      </Container>
    </BaseScreen>
  );
}
