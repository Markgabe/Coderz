import { useEffect, useState } from 'react';

import {
  Container,
  RankContainer,
  RankBorder,
  UserStatus,
  Rank,
} from './styles';

import BaseScreen from '../../components/BaseScreen';

import RankColors from '../../utils/RankColors';

import api from '../../services/api';

export default function ChallengeSelection() {
  const [rank, setRank] = useState([]);
  useEffect(async () => {
    const { data } = await api.get('rank');
    setRank(data);
  }, []);
  return (
    <BaseScreen activePage='rank'>
      <Container>
        <Rank>
          {rank.map((user, index) => (
            <RankContainer key={user.id}>
              <h3>{`#${index}`}</h3>
              <UserStatus />
              <h2>{user.name}</h2>
              <h4>&nbsp;{user.xp} XP</h4>
              <RankBorder style={{ borderRightColor: RankColors[user.rank] }} />
            </RankContainer>
          ))}
        </Rank>
      </Container>
    </BaseScreen>
  );
}
