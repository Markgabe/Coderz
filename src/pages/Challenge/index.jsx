import React, { useEffect, useState } from 'react';

import BaseScreen from '../../components/BaseScreen';
import BlocklyChallengeArea from '../../components/BlocklyChallengeArea';

import api from '../../services/api';

export default function Challenge(props) {
  const [challenge, setChallenge] = useState({});

  useEffect(async () => {
    try {
      const { data } = await api.get(
        `/challenge/${props.match.params.id}/testCases`
      );
      setChallenge(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, []);
  return (
    <BaseScreen activePage='challenge'>
      <BlocklyChallengeArea challenge={challenge} />
    </BaseScreen>
  );
}
