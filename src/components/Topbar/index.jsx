import React, { useContext } from 'react';

import { Context } from '../../contexts/AuthContext';

import { capitalize } from '../../utils/StringUtils';
import { getLevel } from '../../utils/LevelByXP';

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

export default function Topbar() {
  const { handleLogout } = useContext(Context);

  const { name, rank, xp } = JSON.parse(localStorage.getItem('userData'));

  return (
    <Container>
      <BarContainer>
        <Rank style={{ borderLeftColor: RankColors[rank] }} />
        <LevelContainer>
          <h1>LEVEL {getLevel(xp)}</h1>
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
