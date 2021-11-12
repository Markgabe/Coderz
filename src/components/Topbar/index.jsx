import React from 'react';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
    localStorage.removeItem('rank');
    localStorage.removeItem('xp');

    history.push('/login');
  };

  const rank = localStorage.getItem('rank');

  return (
    <Container>
      <BarContainer>
        <Rank style={{ borderLeftColor: RankColors[rank] }} />
        <LevelContainer>
          <h1>LEVEL 34</h1>
          <h4>{rank[0].toUpperCase() + rank.slice(1)} IV</h4>
        </LevelContainer>
        <UserInfoContainer>
          <p>{localStorage.getItem('username') || 'MARKGOD'}</p>
          <LogoutButton onClick={() => handleLogout()}>
            <LogoutIcon />
          </LogoutButton>
        </UserInfoContainer>
      </BarContainer>
    </Container>
  );
}
