import React, { useEffect, useState } from 'react';

import { ChallengeCard } from './styles';
import BaseScreen from '../../components/BaseScreen';

import history from '../../history';

import api from '../../services/api';

export default function Challenge() {
  const [challenges, setChallenges] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await api.get('/challenges');
      setChallenges(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, []);
  return (
    <BaseScreen activePage='challenge'>
      {challenges.length > 0 &&
        challenges.map((challenge) => (
          <ChallengeCard key={challenge.id}>
            <h2>{challenge.name}</h2>
            <p>{challenge.description}</p>
            <button onClick={() => history.push(`/challenge/${challenge.id}`)}>
              Abrir
            </button>
          </ChallengeCard>
        ))}
    </BaseScreen>
  );
}
