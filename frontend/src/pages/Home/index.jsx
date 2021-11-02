import React from 'react';

import { Container, MainArea } from './styles';
import SideNavbar from '../../components/SideNavbar';
import Topbar from '../../components/Topbar';

function Home() {
  return (
    <Container>
      <SideNavbar />
      <MainArea>
        <Topbar />
      </MainArea>
    </Container>
  );
}

export default Home;
