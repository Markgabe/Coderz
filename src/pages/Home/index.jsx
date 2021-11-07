import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, MainArea, CardArea } from './styles';
import SideNavbar from '../../components/SideNavbar';
import Topbar from '../../components/Topbar';
import Card from '../../components/Card';

function Home() {
  const history = useHistory();

  useEffect(() => {
    if (
      localStorage.getItem('username') === '' ||
      localStorage.getItem('username') === null
    ) {
      history.push('/login');
    }
  }, []);
  return (
    <Container>
      <SideNavbar />
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

export default Home;
