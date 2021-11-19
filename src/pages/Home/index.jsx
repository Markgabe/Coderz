import React from 'react';

import { Container, MainArea, CardArea } from './styles';
import SideNavbar from '../../components/SideNavbar';
import Topbar from '../../components/Topbar';
import Card from '../../components/Card';

export default function Home() {
  return (
    <Container>
      <SideNavbar active='home' />
      <MainArea>
        <Topbar />
        <CardArea>
          <Card>a</Card>
          <Card>b</Card>
          <Card>c</Card>
          <Card>d</Card>
        </CardArea>
      </MainArea>
    </Container>
  );
}
