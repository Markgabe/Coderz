import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  width: 85px;
  height: 100vh;
  background-color: white;
`;

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  background-color: #6699CC;
  display: flex;
  margin: 15px auto;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 2.8em;
  font-family: 'Lato', sans-serif;
  box-shadow: inset 0 0 20px 0 rgba(0,0,0,0.4);
  cursor: default;
  user-select: none;
`;

export const Separator = styled.div`
  width: 75%;
  border: 1px solid #BDBDBD;
  align-self: center;
`;

export const IconGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: auto;
  gap: 50px;

  @media (max-height: 768px) {
    gap: 15px;
  }
`;

export const ExpandButton = styled.div`
  margin-bottom: 10px;
  align-self: center;
`;
