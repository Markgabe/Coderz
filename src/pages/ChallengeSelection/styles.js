import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ChallengeArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 260px);
  gap: 20px;
  overflow-y: auto;
  justify-content: center;
`;

export const ChallengeCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 30px;
  padding: 20px;

  height: 30%;
  width: 40%;

  background-color: white;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);

  animation: ${fadeAnimation} 0.5s;
  transition: all 0.2s;

  @media(max-width: 1366px) {
    height: 50%;
  }

  h2 {
    color: #003b6d;
  }

  p {
    color: #676767;
    margin: 10px 0;
    overflow-wrap: break-word;
  }
  
  div {
    display: flex;
    margin-top: auto;

    h4 {
      color: #3e8924;
      margin: auto auto 0 0;
    }
    
    a {
      background: #6699cc;
      cursor: pointer;
      padding: 5px 20px;
      border: none;
      color: white;
      font-weight: bold;
      font-family: 'Montserrat', sans-serif;
      margin: auto 0 0 auto;
      height: 30px;
      text-decoration: none;

      &:hover {
        filter: brightness(110%);
      }
    }
  }

  &:hover {
    transform: scale(1.025);
  }
`;

export const VerticalSeparator = styled.div`
  display: flex;
  height: 100%;
  width: 1px;
  background-color: #C4C4C4;

  margin-left: 20px;
`;

export const CategoryGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 210px;
  gap: 20px;
`;

export const CategoryCard = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);

  filter: ${(props) => (props.selected ? 'none' : 'opacity(60%)')};

  &:hover {
    filter: opacity(100%);
  }
`;

export const CategoryLabel = styled.p`
  color: white;
  margin: auto auto auto 10px;
  font-size: 1.6em;
`;

export const CategoryIcon = styled(({ svg, ...props }) => svg.render(props))`
  color: white;
  margin: auto 10px auto auto;
  width: 40px;
  height: 40px;
`;
