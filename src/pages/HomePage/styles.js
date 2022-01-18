import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 50px;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
  background: white;
`;

export const Title = styled.h1`
  color: #003B6D;
  font-size: 3em;
`;

export const Description = styled.p`
  margin-top: 10px;
  color: #676767;
  font-size: 1.5em;
`;

export const CategoryCard = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
  background-color: ${(props) => props.color};
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);

  margin: 15px 0;

  filter: ${(props) => (props.selected ? 'none' : 'opacity(60%)')};

  &:hover {
    filter: opacity(100%);
  }

  div div p {
    color: white;
    font-size: 1.2em;
    padding: 10px;
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
