import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogoutBoxR } from '@styled-icons/remix-line';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const BarContainer = styled.div`
  display: flex;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
  width: 95%;
  height: 80px;
  margin: 20px auto;
  background-color: white;
`;

export const Rank = styled.div`
  width: 0;
  height: 0;
  border-left: 80px solid #FF4370;
  border-bottom: 80px solid transparent;
`;

export const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1, h4 {   
    font-weight: 300;
    padding: 0;
    margin: 0;
    color: #003b6d;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  margin: auto 10px auto auto;
  color: #676767;

  p {
    line-height: 4;
    font-weight: 600;
    color: #003b6d;
  }
`;

export const LogoutButton = styled(Link)`
  cursor: pointer;
  color: #676767;
  transition: all 0.3s;

  &:visited {
    color: #676767;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoutIcon = styled(LogoutBoxR)`
  width: 24px;
  height: 24px;
  margin: auto 10px;
`;
