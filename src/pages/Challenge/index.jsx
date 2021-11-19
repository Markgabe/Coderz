import React, { useEffect, useState } from 'react';

import { Container, MainArea } from './styles';
import SideNavbar from '../../components/SideNavbar';
import Topbar from '../../components/Topbar';
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
    <Container>
      <SideNavbar active='challenge' />
      <MainArea>
        <Topbar />
        <BlocklyChallengeArea challenge={challenge} />
      </MainArea>
    </Container>
  );
}
