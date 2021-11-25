/* eslint-disable function-paren-newline */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  ChallengeArea,
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
      <h2>{challenge.name}</h2>
      <p>{challenge.description}</p>
      <div>
        <h4>+{challenge.gainedXP}XP</h4>
        <Link to={`/challenge/${challenge.id}`}>Quero tentar!</Link>
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
