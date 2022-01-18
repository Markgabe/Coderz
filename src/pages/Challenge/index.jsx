import React, { useEffect, useState } from 'react';

import BaseScreen from '../../components/BaseScreen';
import BlocklyChallengeArea from '../../components/BlocklyChallengeArea';

import { getByIndex } from '../../utils/FirstChallenges';

import api from '../../services/api';

export default function Challenge(props) {
  const [challenge, setChallenge] = useState({});

  useEffect(async () => {
    const challengeId = props.match.params.id;
    if (challengeId < 3000) {
      try {
        const { data } = await api.get(`/challenge/${challengeId}/testCases`);
        setChallenge(data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    } else {
      // Desafios iniciais
      setChallenge(getByIndex(challengeId));
    }
  }, []);
  return (
    <BaseScreen activePage='challenge'>
      <BlocklyChallengeArea challenge={challenge} />
    </BaseScreen>
  );
}
