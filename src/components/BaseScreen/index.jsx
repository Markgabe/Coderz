import React from 'react';

import { Container, MainArea, SlotArea } from './styles';

import SideNavbar from '../SideNavbar';
import Topbar from '../Topbar';

export default function BaseScreen({ children, activePage }) {
  return (
    <Container>
      <SideNavbar active={activePage} />
      <MainArea>
        <Topbar />
        <SlotArea>{children}</SlotArea>
      </MainArea>
    </Container>
  );
}
