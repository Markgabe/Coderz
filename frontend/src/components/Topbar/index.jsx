import React from 'react';

import {
  Container,
  BarContainer,
  Rank,
  LevelContainer,
  UserInfoContainer,
  LogoutIcon,
} from './styles';

export default function SideNavbar() {
  return (
    <Container>
      <BarContainer>
        <Rank />
        <LevelContainer>
          <h1>LEVEL 34</h1>
          <h4>Ruby IV</h4>
        </LevelContainer>
        <UserInfoContainer>
          <p>MARKGOD</p>
          <LogoutIcon />
        </UserInfoContainer>
      </BarContainer>
    </Container>
  );
}
