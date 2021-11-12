import React from 'react';

import { Container, MainArea } from './styles';
import SideNavbar from '../../components/SideNavbar';
import Topbar from '../../components/Topbar';
import BlocklyChallengeArea from '../../components/BlocklyChallengeArea';

import useAuth from '../../hooks/useAuth';

export default function Challenge() {
  useAuth();
  return (
    <Container>
      <SideNavbar active='challenge' />
      <MainArea>
        <Topbar />
        <BlocklyChallengeArea />
      </MainArea>
    </Container>
  );
}
