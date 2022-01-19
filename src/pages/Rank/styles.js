import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;

  margin: auto;
  
  padding-top: 30px;
`;

export const Rank = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);

  margin: 0 auto;
`;

export const UserStatus = styled.div`
  width: 20px;
  height: 20px;
  background: #5CBD66;
  border-radius: 50%;
  margin: auto 10px;
  display: none;
`;

export const RankContainer = styled.div`
  display: flex;

  height: 60px;
  width: 100%;

  margin: 0 auto;

  background: white;

  h2 {
    color: #003B6D;
    margin: auto 10px;
    font-weight: 400;
  }

  h3 {
    margin: auto 0 auto 5px;
  }

  h4 {
    margin-left: auto;
    color: #3e8924;
  }

  &:nth-child(odd) {
    background: #EBEDF3;
  }
`;

export const RankBorder = styled.div`
  margin-left: 10px;
  width: 0;
  height: 0;
  border-right: 60px solid transparent;
  border-top: 60px solid transparent;

  @media (max-width: 400px) {
    display: none;
  }
`;
