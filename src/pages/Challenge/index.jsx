import React, { useEffect, useState } from 'react';

import { Container, MainArea } from './styles';
import SideNavbar from '../../components/SideNavbar';
import Topbar from '../../components/Topbar';
import BlocklyChallengeArea from '../../components/BlocklyChallengeArea';

import api from '../../services/api';

import useAuth from '../../hooks/useAuth';

export default function Challenge(props) {
  useAuth();

  const [challenge, setChallenge] = useState({});

  useEffect(async () => {
    await api
      .get(`/challenge/${props.match.params.id}/testCases`)
      .then((result) => {
        setChallenge(result.data);
      })
      .catch((result) => {
        // eslint-disable-next-line no-console
        console.log(result);
      });
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
