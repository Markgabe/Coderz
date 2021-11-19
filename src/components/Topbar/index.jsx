import React, { useContext } from 'react';

import { Context } from '../../contexts/AuthContext';

import { capitalize } from '../../utils/StringUtils';

import RankColors from '../../utils/RankColors';
import {
  Container,
  BarContainer,
  Rank,
  LevelContainer,
  UserInfoContainer,
  LogoutIcon,
  LogoutButton,
} from './styles';

export default function SideNavbar() {
  const { handleLogout } = useContext(Context);

  const { name, rank } = JSON.parse(localStorage.getItem('userData'));

  return (
    <Container>
      <BarContainer>
        <Rank style={{ borderLeftColor: RankColors[rank] }} />
        <LevelContainer>
          <h1>LEVEL 34</h1>
          <h4>{capitalize(rank)} IV</h4>
        </LevelContainer>
        <UserInfoContainer>
          <p>{name}</p>
          <LogoutButton onClick={() => handleLogout()}>
            <LogoutIcon />
          </LogoutButton>
        </UserInfoContainer>
      </BarContainer>
    </Container>
  );
}
